# WT Blog - Next.js Portfolio

这是一个基于 **Next.js 13+ (App Router)** 架构的现代化个人作品集网站，由原始 HTML 模板升级而来。采用了沉浸式滚动体验、自定义光标追踪以及响应式设计。

## 🛠 技术栈

- **框架**: Next.js 13+ (App Router)
- **样式**: Tailwind CSS 4.0 (PostCSS 驱动)
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Docker / Docker Compose (Standalone 模式)

---

## 🚀 本地开发

在开始之前，请确保已安装 Node.js (推荐 v20+)。

1. **安装依赖**:
   ```bash
   npm install
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```
   访问 [http://localhost:3000](http://localhost:3000) 进行预览。

3. **构建生产版本**:
   ```bash
   npm run build
   ```

---

## 🐳 Docker 部署 (推荐)

项目已针对 Docker 进行了深度优化（使用 Next.js Standalone 模式），镜像体积小，启动飞快。

### 1. 使用 Docker Compose (最简单)

这是管理容器的推荐方式：

*   **启动服务 (后台运行)**:
    ```bash
    docker-compose up -d
    ```
*   **停止并移除容器**:
    ```bash
    docker-compose down
    ```
*   **查看运行状态/日志**:
    ```bash
    docker-compose ps
    docker-compose logs -f web
    ```
*   **代码更新后重新构建并运行**:
    ```bash
    docker-compose up -d --build
    ```

### 2. 使用原生 Docker 命令

如果你不想用 Compose，也可以手动处理：

*   **构建镜像**:
    ```bash
    docker build -t wt-blog:latest .
    ```
*   **运行容器**:
    ```bash
    docker run -d -p 3000:3000 --name wt-blog-app wt-blog:latest
    ```

---

## 📁 项目结构

- `/app`: 页面路由、布局及全局样式
- `/components`: 核心 React 组件 (Cursor, Dock, ProjectCard 等)
- `/public`: 静态资源文件 (图片、字体)
- `/lib`: 工具函数
- `Dockerfile`: 多阶段优化构建脚本
- `docker-compose.yml`: 服务容器编排配置

---

## 💡 维护 tips

*   **样式修改**: 采用 Tailwind v4，请通过 `app/globals.css` 进行主题扩展。
*   **端口占用**: 如果遇到 `Port 3000 is in use` 报错，请确保先停止本地 `npm run dev` 进程后再启动 Docker。
