package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DB 全局数据库对象
var DB *gorm.DB

// InitDB 初始化 PostgreSQL 数据库连接
func InitDB() {
	// 配置数据源
	dsn := "host=127.0.0.1 user=myuser password=mypassword dbname=my-blog port=5432 sslmode=disable TimeZone=Asia/Shanghai"

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to PostgreSQL database: %v", err)
	}

	log.Println("Successfully connected to PostgreSQL (my-blog) database!")
}
