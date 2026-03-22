'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ArticleContent({ post }: { post: any }) {
    const { scrollYProgress } = useScroll();
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // 视差和褪色效果
    const y = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(heroScroll, [0, 1], [1, 0.3]);

    return (
        <article className="relative bg-white text-gray-900 pb-32">
            {/* 顶部极细阅读进度条 */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
                style={{ scaleX: scrollYProgress }} 
            />

            {/* 英雄区 (Hero Section) */}
            <div ref={heroRef} className="relative h-[65vh] w-full overflow-hidden bg-gray-100">
                <motion.img 
                    style={{ y, opacity }}
                    src={post.coverImage} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* 文字包裹区 */}
            <div className="max-w-3xl mx-auto px-6 lg:px-0 -mt-24 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white p-8 md:p-16 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.04)]"
                >
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-8">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12 text-gray-900">
                        {post.title}
                    </h1>

                    <hr className="w-24 border-gray-200 mb-12" />

                    {/* Prose Body */}
                    <div 
                        className="article-body prose prose-lg prose-gray max-w-none md:prose-xl prose-headings:font-serif prose-a:text-blue-600 hover:prose-a:text-blue-500 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </div>
        </article>
    );
}
