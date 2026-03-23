#!/usr/bin/env bash

echo "[1/3] Stopping any existing app..."
pkill -f "./app" 2>/dev/null

echo "[2/3] Building the application..."
rm -f app
export PATH="/usr/local/go/bin:/usr/local/opt/go@1.20/bin:$PATH"
go build -o app cmd/app/main.go

if [ $? -ne 0 ]; then
    echo "[ERROR] Build failed!"
    exit 1
fi

echo "[3/3] Starting the application..."
./app
