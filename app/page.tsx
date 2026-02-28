'use client';

import Header from "@/components/Header";
import NoiseBackground from "@/components/NoiseBackground";
import Dock from "@/components/Dock";
import ProjectCard from "@/components/ProjectCard";
import ArticleItem from "@/components/ArticleItem";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Neon Horizons",
        category: "Web Design / Development",
        image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2670&auto=format&fit=crop",
        color: "bg-blue-600/20"
    },
    {
        title: "Abstract Data",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        color: "bg-purple-600/20"
    },
    {
        title: "Retro Future",
        category: "App Interface",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        color: "bg-emerald-600/20"
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
    return (
        <main>
            <Header />
            <NoiseBackground />
            <Dock />

            {/* Hero Section */}
            <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-gray-500"
                        >
                            PORTFOLIO 2024
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, scaleY: 1.1, y: 50 }}
                            whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                            className="font-serif text-6xl md:text-8xl leading-[1.0] mb-8 text-gray-900"
                        >
                            CODE, DESIGN <br />
                            <span className="italic text-gray-400">& LIFE</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold flex items-center justify-between">
                                <span>最新文章</span>
                                <a href="#thoughts" className="text-blue-500 hover:text-blue-600 normal-case tracking-normal">更多 →</a>
                            </h3>
                            <ul className="space-y-5">
                                {articles.slice(0, 2).map((article, i) => (
                                    <li key={i} className="group cursor-pointer">
                                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-[17px] mb-1">{article.title}</h4>
                                        <p className="text-sm text-gray-500 line-clamp-1">{article.excerpt}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* 常用工具模块 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
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
                        className="font-serif text-4xl md:text-5xl mb-12"
                    >
                        Selected Works
                    </motion.h2>

                    <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10 px-4 snap-x snap-mandatory">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
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
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 md:px-20 bg-gray-50 text-gray-900 flex flex-col justify-center min-h-[60vh] border-t border-gray-100">
                <div className="max-w-5xl mx-auto w-full text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-sm uppercase tracking-[0.2em] mb-8 text-gray-400 font-medium"
                    >
                        Get in Touch
                    </motion.p>
                    <motion.a
                        href="mailto:hello@example.com"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-5xl md:text-8xl hover:text-gray-500 transition-colors block mb-12 cursor-pointer text-gray-900"
                    >
                        hello@example.com
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-8"
                    >
                        <a href="#" className="text-lg text-gray-500 hover:text-gray-900 transition-colors hover:underline underline-offset-4 cursor-pointer">GitHub</a>
                        <a href="#" className="text-lg text-gray-500 hover:text-gray-900 transition-colors hover:underline underline-offset-4 cursor-pointer">Twitter</a>
                        <a href="#" className="text-lg text-gray-500 hover:text-gray-900 transition-colors hover:underline underline-offset-4 cursor-pointer">Instagram</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-32 text-gray-400 text-sm"
                    >
                        &copy; 2024 Digital Artisan. Designed with purpose.
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
