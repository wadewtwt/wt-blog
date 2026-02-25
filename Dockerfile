# Stage 1: Build dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 复制包管理文件并安装依赖
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 如果你有环境变量，可以在这里设置
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Stage 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制构建产物到 standalone 目录
COPY --from=builder /app/public ./public

# 设置正确的用户权限
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 关键：由于我们在 next.config.mjs 中开启了 output: 'standalone'
# Next.js 只需要这几个核心文件就能启动，极大缩小镜像体积
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# 如果有 host 问题，可以尝试设置以下变量
# ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
