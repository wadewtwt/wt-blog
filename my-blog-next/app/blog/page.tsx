'use client';

import { useState } from "react";
import Header from "@/components/Header";
import NoiseBackground from "@/components/NoiseBackground";
import Dock from "@/components/Dock";
import ArticleItem from "@/components/ArticleItem";
import { motion } from "framer-motion";

// 模拟的文章数据 - 这里生成了45篇用于演示分页
const allArticles = Array.from({ length: 45 }).map((_, i) => ({
    title: `The Aesthetic of Clean Code ${i + 1} - A deep dive into architecture`,
    date: `0${(i % 9) + 1}.2${(i % 5) + 4}.24`,
    excerpt: `Exploring the intersection of software architecture and design philosophy. How stripping away the non-essential reveals the core purpose of user interaction in modern web development...`
}));

const ITEMS_PER_PAGE = 10;

export default function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Pagination logic
    const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentArticles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <NoiseBackground />
            <Dock />

            <section className="pt-32 pb-24 px-6 md:px-20 min-h-screen flex flex-col">
                <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col">


                    <div className="space-y-12 mb-16 flex-grow">
                        {currentArticles.map((article, index) => (
                            <ArticleItem key={index} {...article} delay={index * 0.05} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-center items-center gap-2 mt-auto pt-8 border-t border-gray-100"
                        >
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                aria-label="Previous page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            
                            <div className="flex gap-1 mx-2 md:mx-4">
                                {Array.from({ length: totalPages }).map((_, i) => {
                                    const page = i + 1;
                                    // Simple pagination sliding window logically
                                    if (
                                        page === 1 || 
                                        page === totalPages || 
                                        (page >= currentPage - 1 && page <= currentPage + 1)
                                    ) {
                                        return (
                                            <button
                                                key={page}
                                                onClick={() => handlePageChange(page)}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                                                    currentPage === page 
                                                    ? 'bg-gray-900 text-white shadow-md' 
                                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        );
                                    } else if (
                                        page === currentPage - 2 || 
                                        page === currentPage + 2
                                    ) {
                                        return <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-300 pointer-events-none">...</span>;
                                    }
                                    return null;
                                })}
                            </div>

                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                aria-label="Next page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}
