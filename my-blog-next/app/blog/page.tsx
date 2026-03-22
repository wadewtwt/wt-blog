'use client';

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import NoiseBackground from "@/components/NoiseBackground";
import Dock from "@/components/Dock";
import ArticleItem from "@/components/ArticleItem";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 10;

interface BlogContent {
    id: number;
    title: string;
    dateAdded: string;
    autoDesc: string;
}

export default function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogs, setBlogs] = useState<BlogContent[]>([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/blogs?page=${currentPage}&pageSize=${ITEMS_PER_PAGE}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.data) {
                    setBlogs(data.data);
                    setTotal(data.total);
                }
            })
            .catch(err => console.error("Failed to fetch blogs:", err))
            .finally(() => setIsLoading(false));
    }, [currentPage]);

    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
    const currentArticles = blogs;

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
                        {isLoading ? (
                            <div className="flex justify-center items-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                            </div>
                        ) : currentArticles.length > 0 ? (
                            currentArticles.map((article, index) => (
                                <ArticleItem 
                                    key={article.id} 
                                    id={article.id}
                                    title={article.title}
                                    date={article.dateAdded ? article.dateAdded.substring(0, 10).replace(/-/g, '.') : ""}
                                    excerpt={article.autoDesc || "No description provided."}
                                    delay={index * 0.05} 
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-10">No articles found.</div>
                        )}
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
