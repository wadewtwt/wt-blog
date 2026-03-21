'use client';

import { useState } from "react";

import Link from 'next/link';
import Header from "@/components/Header";
import NoiseBackground from "@/components/NoiseBackground";
import Dock from "@/components/Dock";
import ProjectCard from "@/components/ProjectCard";
import ArticleItem from "@/components/ArticleItem";
import AnimatedGradient from "@/components/AnimatedGradient";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "Neon Horizons",
        category: "Web Design",
        image: "/images/project1.jpg",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        title: "Abstract Data",
        category: "Data Visualization",
        image: "/images/project2.jpg",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Retro Future",
        category: "App Interface",
        image: "/images/project3.jpg",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Lumina Workspace",
        category: "Product Design",
        image: "/images/project4.jpg",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Echo Architecture",
        category: "3D Rendering",
        image: "/images/project5.jpg",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Silent Symphony",
        category: "Branding",
        image: "/images/project6.jpg",
        span: "md:col-span-1 md:row-span-1"
    }
];

const articles = [
    {
        title: "The Aesthetic of Clean Code",
        date: "01.28.24",
        excerpt: "How software architecture mirrors brutalist architecture in its honesty and exposure of function..."
    },
    {
        title: "Digital Minimalism",
        date: "01.25.24",
        excerpt: "Stripping away the non-essential to reveal the core purpose of user interaction..."
    },
    {
        title: "Photography as Code",
        date: "01.20.24",
        excerpt: "Capturing light is just another form of processing input data into a visual output..."
    }
];

export default function Home() {
    const [activeCategory, setActiveCategory] = useState("All");
    
    // 提取所有不重复的分类，并在最前面加上 All
    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
    
    // 根据当前选中的分类过滤项目
    const filteredProjects = projects.filter(p => activeCategory === "All" || p.category === activeCategory);

    return (
        <main>
            <Header />
            <NoiseBackground />
            <Dock />

            {/* Hero Section */}
            <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 pt-32 pb-20 overflow-hidden relative">
                <AnimatedGradient />

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-gray-500"
                        >
                            PORTFOLIO 2024
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, scaleY: 1.1, y: 50 }}
                            whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                            className="font-serif text-6xl md:text-8xl leading-[1.0] mb-8 text-gray-900"
                        >
                            CODE, DESIGN <br />
                            <span className="italic text-gray-400">& LIFE</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-8 border-l-4 border-gray-200 pl-6"
                        >
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                你好！我是一名热衷于构建数字体验的开发者。这里是我的数字花园，记录我关于技术、设计与日常生活的思考。
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a href="https://blog.example.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                                访问我的博客 ↗
                            </a>
                            <a href="#contact" className="px-6 py-3 border border-gray-300 rounded-full hover:border-gray-900 hover:text-gray-900 text-gray-600 transition-colors text-sm font-medium">
                                联系我
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                        {/* 博客文章推荐模块 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold flex items-center justify-between">
                                <span>最新文章</span>
                                <a href="#thoughts" className="text-blue-500 hover:text-blue-600 normal-case tracking-normal">更多 →</a>
                            </h3>
                            <ul className="space-y-5">
                                {articles.slice(0, 2).map((article, i) => {
                                    const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                    return (
                                        <li key={i} className="group cursor-pointer">
                                            <Link href={`/blog/${slug}`} className="block">
                                                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-[17px] mb-1">{article.title}</h4>
                                                <p className="text-sm text-gray-500 line-clamp-1">{article.excerpt}</p>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>

                        {/* 常用工具模块 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">
                                日常工具栈
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Figma', 'Node.js', 'VS Code'].map((tool, i) => (
                                    <span key={i} className="px-3.5 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors cursor-default">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Works Section */}
            <section id="work" className="py-24 bg-white text-gray-900 px-0 relative overflow-hidden border-y border-gray-100">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                <div className="px-6 md:px-20 h-full flex flex-col justify-center relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl mb-8"
                    >
                        Selected Works
                    </motion.h2>

                    {/* 分类过滤器组件 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 md:gap-3 mb-10 overflow-x-auto no-scrollbar pb-2"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                                    activeCategory === category 
                                    ? "bg-gray-900 border-gray-900 text-white shadow-md cursor-default" 
                                    : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    key={project.title}
                                    className={`w-full h-full ${project.span}`}
                                >
                                    {/* ProjectCard 内部会收到 w-full h-full 自动撑满此 motion Wrapper */}
                                    <ProjectCard 
                                        title={project.title} 
                                        category={project.category} 
                                        image={project.image} 
                                        span="w-full h-full" 
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Thoughts Section */}
            <section id="thoughts" className="py-24 px-6 md:px-20">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="flex items-center gap-4 mb-16">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="font-serif text-5xl"
                        >
                            Thoughts
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                            className="h-px flex-1 bg-gray-200 origin-left"
                        />
                    </div>

                    <div className="space-y-12">
                        {articles.map((article, index) => (
                            <ArticleItem key={index} {...article} delay={index * 0.1} />
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-16 flex justify-end"
                    >
                        <Link 
                            href="/blog" 
                            className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-0.5"
                        >
                            查看全部
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 md:px-20 bg-gray-50 text-gray-900 flex flex-col justify-center min-h-[70vh] border-t border-gray-100 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-0 pointer-events-none" />

                <div className="max-w-5xl mx-auto w-full text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm uppercase tracking-[0.3em] mb-6 text-gray-400 font-semibold">
                            Let&apos;s build something great
                        </p>
                        <h2 className="font-serif text-4xl md:text-6xl mb-12 tracking-tight">
                            Ready to start a <span className="italic">new adventure?</span>
                        </h2>
                    </motion.div>

                    <motion.a
                        href="mailto:1809441@gmail.com"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-5xl md:text-8xl hover:text-blue-600 transition-colors block mb-16 cursor-pointer text-gray-900 leading-none break-all"
                    >
                        1809441@gmail.com
                    </motion.a>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-gray-200 pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Socials</h3>
                            <div className="flex flex-col gap-3">
                                <a href="#" className="text-lg text-gray-600 hover:text-blue-600 transition-colors w-fit">GitHub</a>
                                <a href="#" className="text-lg text-gray-600 hover:text-blue-600 transition-colors w-fit">Twitter</a>
                                <a href="#" className="text-lg text-gray-600 hover:text-blue-600 transition-colors w-fit">LinkedIn</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Location</h3>
                            <p className="text-lg text-gray-600">Based in Shanghai, China <br />Working Worldwide.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Last Updated</h3>
                            <p className="text-lg text-gray-600">February 2024 <br />Built with Next.js & Love.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-32 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-100 pt-8"
                    >
                        <p>&copy; 2024 WADE.WT. ALL RIGHTS RESERVED.</p>
                        <p>DESIGNED WITH PURPOSE & MANIFESTO.</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
