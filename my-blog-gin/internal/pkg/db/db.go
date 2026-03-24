package db

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DB 全局数据库对象
var DB *gorm.DB

// InitDB 初始化 PostgreSQL 数据库连接
func InitDB() {
	// 获取环境变量，并提供本地开发默认值
	host := getEnv("DB_HOST", "127.0.0.1")
	port := getEnv("DB_PORT", "5432")
	user := getEnv("DB_USER", "myuser")
	password := getEnv("DB_PASSWORD", "mypassword")
	dbname := getEnv("DB_NAME", "my-blog")

	// 拼接 DSN，并保持 Asia/Shanghai 时区支持
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai",
		host, user, password, dbname, port)

	log.Printf("Connecting to PostgreSQL at %s:%s (DB: %s)...", host, port, dbname)

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to PostgreSQL database: %v", err)
	}

	log.Println("Successfully connected to PostgreSQL database!")
}

// getEnv 辅助函数：读取环境变量，如果不存在则回退到默认值
func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

