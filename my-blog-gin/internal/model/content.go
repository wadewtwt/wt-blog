package model

import "time"

// BlogContent 博客内容模型
type BlogContent struct {
	Id               int64     `gorm:"primaryKey;column:id" json:"id"`
	Title            string    `gorm:"column:title" json:"title"`
	DateAdded        time.Time `gorm:"column:date_added" json:"dateAdded"`
	SourceUrl        string    `gorm:"column:source_url" json:"sourceUrl"`
	PostType         string    `gorm:"column:post_type" json:"postType"`
	Body             string    `gorm:"column:body" json:"body"`
	BlogId           int64     `gorm:"column:blog_id" json:"blogId"`
	Description      string    `gorm:"column:description" json:"description"`
	DateUpdated      time.Time `gorm:"column:date_updated" json:"dateUpdated"`
	IsMarkdown       bool      `gorm:"column:is_markdown" json:"isMarkdown"`
	EntryName        string    `gorm:"column:entry_name" json:"entryName"`
	CreatedTime      time.Time `gorm:"column:created_time" json:"createdTime"`
	IsActive         bool      `gorm:"column:is_active" json:"isActive"`
	AutoDesc         string    `gorm:"column:auto_desc" json:"autoDesc"`
	AccessPermission string    `gorm:"column:access_permission" json:"accessPermission"`
}

// TableName 指定数据库表名
func (BlogContent) TableName() string {
	return "blog_content"
}
