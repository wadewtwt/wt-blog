@echo off
setlocal

echo [1/4] Stopping any existing app.exe...
taskkill /f /im app.exe 2>nul

echo [2/4] Setting Environment Variables...
set GOOS=windows
set GOARCH=amd64

echo [3/4] Building the application...
if exist app.exe del /f app.exe
go build -o app.exe cmd/app/main.go

if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    pause
    exit /b %ERRORLEVEL%
)

echo [4/4] Starting the application...
.\app.exe

endlocal
