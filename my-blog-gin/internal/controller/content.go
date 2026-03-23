package controller

import (
	"log"
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

	// 3. 分页查询，按 ID 倒序，指定查询字段
	offset := (page - 1) * pageSize
	err := db.DB.Select([]string{"Id", "Title", "DateAdded", "AutoDesc"}).Order("Id desc").Offset(offset).Limit(pageSize).Find(&blogs).Error

	if err != nil {
		log.Printf("Error fetching blogs from DB: %v", err) // 打印具体错误到控制台
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to fetch blogs",
			"details": err.Error(), // 暂时透传回前端看看 (正式环境应删掉)
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

// GetBlogDetail 查询单篇博客详情
func GetBlogDetail(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid blog ID",
		})
		return
	}

	var blog model.BlogContent
	// 查询单个博客
	err = db.DB.Where("Id = ?", id).First(&blog).Error
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Blog not found",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": blog,
	})
}
