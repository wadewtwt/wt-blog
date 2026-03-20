import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ArticleContent from './ArticleContent'; // Client component for Framer Motion

// Next.js dynamic route component
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // 模拟基于 slug 获取文章数据
    const post = {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        date: "Feb 24, 2024",
        readTime: "5 min read",
        category: "Design / Engineering",
        coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>在数字时代的浪潮中，我们不仅是在编写代码，更是在构建交互的艺术品。技术与美学的边界正变得前所未有的模糊。</p>
            
            <h2>代码的美学 (The Aesthetic of Code)</h2>
            <p>我们常常谈论“整洁代码”(Clean Code)，但往往局限于其可维护性和工程学价值。实际上，优雅的架构与极简主义建筑有异曲同工之妙——它们都剥离了非必要元素，让功能本身成为一种美。</p>
            
            <p>就像密斯·凡·德罗 (Mies van der Rohe) 提出的 “Less is more”，在现代 Web 开发中，最顶级的体验往往来源于最克制的交互设计与最精炼的代码逻辑。</p>

            <blockquote>
                “设计不仅是视觉上的呈现，更是它是如何运作的。” — Steve Jobs
            </blockquote>

            <h2>留白的力量 (Power of Whitespace)</h2>
            <p>在界面设计中，留白（Negative Space）不仅是为了让内容呼吸，它更是引导用户视线、建立信息层级的核心锚点。当我们去掉多余的边框和生硬的分割线，取而代之以网格系统和排版空间的留白，界面立刻就会散发出高级的画廊质感。</p>
            
            <p>同样的原则也适用于我们的生活：在信息的洪流中保留属于自己的心智留白，才能在喧嚣中听见真实的内在旋律。</p>
        `
    };

    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Header / Back Button */}
            <header className="fixed top-0 left-0 w-full p-6 md:px-12 z-50 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
                <Link 
                    href="/#thoughts" 
                    className="group pointer-events-auto flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium tracking-widest uppercase text-xs">Back</span>
                </Link>
            </header>

            {/* 把具有交互动效的渲染提出来放入 Client Component */}
            <ArticleContent post={post} />
        </main>
    );
}
