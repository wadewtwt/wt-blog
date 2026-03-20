package main

import (
	"log"
	"my-blog-gin/internal/pkg/db"
	"my-blog-gin/internal/router"
)

func main() {
	// 初始化数据库连接
	db.InitDB()

	r := router.SetupRouter()

	log.Println("Starting server on :8080")
	if err := r.Run(":8080"); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
