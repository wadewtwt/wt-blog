package router

import (
	"github.com/gin-gonic/gin"
	"my-blog-gin/internal/controller"
)

// SetupRouter 初始化路由
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// 基础路由组
	api := r.Group("/api")
	{
		api.GET("/ping", controller.Ping)
	}

	return r
}
