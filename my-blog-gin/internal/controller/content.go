package controller

import (
	"my-blog-gin/internal/model"
	"my-blog-gin/internal/pkg/db"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetBlogs 分页查询博客内容
func GetBlogs(c *gin.Context) {
	// 1. 获取分页参数 (默认 page=1, pageSize=10)
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	pageSize, _ := strconv.Atoi(c.DefaultQuery("pageSize", "10"))

	if page < 1 {
		page = 1
	}
	if pageSize < 1 {
		pageSize = 10
	}

	var blogs []model.BlogContent
	var total int64

	// 2. 统计总数
	db.DB.Model(&model.BlogContent{}).Count(&total)

	// 3. 分页查询，按 ID 倒序
	offset := (page - 1) * pageSize
	err := db.DB.Order("id desc").Offset(offset).Limit(pageSize).Find(&blogs).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to fetch blogs",
		})
		return
	}

	// 4. 返回结果
	c.JSON(http.StatusOK, gin.H{
		"data":     blogs,
		"total":    total,
		"page":     page,
		"pageSize": pageSize,
	})
}
