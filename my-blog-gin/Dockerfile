# Build stage
FROM registry.cn-shanghai.aliyuncs.com/wt-pro/golang:v2 AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache git
RUN apk add --no-cache tzdata


# Copy and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source code and build
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./cmd/app/main.go

# Run stage
FROM registry.cn-shanghai.aliyuncs.com/wt-pro/golang:v2

WORKDIR /root/

# Install runtime dependencies
RUN apk add --no-cache tzdata

# Copy binary from builder
COPY --from=builder /app/main .


# Expose port
EXPOSE 8080

# Run the backend
CMD ["./main"]
