# My Blog Gin Backend

基于 Gin 框架开发的个人博客后端服务。

## 快速启动 (Windows)

为了方便开发，根目录下提供了一个 `run.bat` 脚本，它会自动完成以下操作：
1. 强制关闭当前正在运行的 `app.exe` (防止端口占用)。
2. 纠正 Go 编译环境变量 (`GOOS=windows`, `GOARCH=amd64`)。
3. 删除旧的二进制文件并重新编译代码。
4. 启动服务。

**运行方式：**
直接双击根目录下的 `run.bat` 或在终端运行：
```powershell
.\run.bat
```

## 手动运行步骤

如果您需要手动执行命令，请确保在 `my-blog-gin` 目录下按顺序执行：

```powershell
# 1. 关闭已有的进程 (如果端口 8080 被占用)
Stop-Process -Name "app" -Force

# 2. 设置环境变量
$env:GOOS = "windows"
$env:GOARCH = "amd64"

# 3. 编译
go build -o app.exe cmd/app/main.go

# 4. 运行
.\app.exe
```

## 数据库运行环境 (Docker)

本项目在 `docker` 目录下提供了 `docker-compose.yml`，用于快速构建本地所需的 PostgreSQL 数据库与 pgAdmin 图形化界面。

**一键启动命令：**
请在根目录下运行以下命令（或进入 `docker` 目录运行 `docker-compose up -d`）：

```bash
docker-compose -f docker/docker-compose.yml up -d
```

**服务说明：**
*   **PostgreSQL**: `localhost:5432` 
    * 账号: `myuser`
    * 密码: `mypassword`
    * 数据库: `mydatabase`
*   **pgAdmin**: `http://localhost:5050`
    * 邮箱: `admin@example.com`
    * 密码: `adminpassword`

## 项目架构

- `cmd/app`: 入口文件 `main.go`。
- `internal/router`: 路由注册。
- `internal/controller`: 接口逻辑处理。
- `internal/pkg/db`: 数据库 (PostgreSQL + GORM) 连接配置。

## API 测试

启动后可访问：`http://localhost:8080/api/ping`
响应：`{"message": "pong"}`
