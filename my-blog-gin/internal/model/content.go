package model

// BlogContent 博客内容模型
type BlogContent struct {
	Id               int    `gorm:"primaryKey;column:Id" json:"id"`
	Title            string `gorm:"column:Title" json:"title"`
	DateAdded        string `gorm:"column:DateAdded" json:"dateAdded"`
	SourceUrl        string `gorm:"column:SourceUrl" json:"sourceUrl"`
	PostType         string `gorm:"column:PostType" json:"postType"`
	Body             string `gorm:"column:Body" json:"body"`
	BlogId           int    `gorm:"column:BlogId" json:"blogId"`
	Description      string `gorm:"column:Description" json:"description"`
	DateUpdated      string `gorm:"column:DateUpdated" json:"dateUpdated"`
	IsMarkdown       int    `gorm:"column:IsMarkdown" json:"isMarkdown"`
	EntryName        string `gorm:"column:EntryName" json:"entryName"`
	CreatedTime      string `gorm:"column:CreatedTime" json:"createdTime"`
	IsActive         int    `gorm:"column:IsActive" json:"isActive"`
	AutoDesc         string `gorm:"column:AutoDesc" json:"autoDesc"`
	AccessPermission string `gorm:"column:AccessPermission" json:"accessPermission"`
}

// TableName 指定数据库表名 (区分大小写)
func (BlogContent) TableName() string {
	return "blog_Content"
}
