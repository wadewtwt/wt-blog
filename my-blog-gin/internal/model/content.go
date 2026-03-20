package model

import "time"

// BlogContent 博客内容模型
type BlogContent struct {
	ID        uint      `gorm:"primaryKey;column:id" json:"id"`
	Title     string    `gorm:"column:title" json:"title"`
	Content   string    `gorm:"column:content" json:"content"`
	CreatedAt time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt time.Time `gorm:"column:updated_at" json:"updated_at"`
}

// TableName 指定数据库表名 (区分大小写)
func (BlogContent) TableName() string {
	return "blog_Content"
}
