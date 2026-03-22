import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ArticleContent from './ArticleContent';
import { marked } from 'marked';

// Next.js dynamic route component
export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    let post = null;
    try {
        // fetching from backend directly for server component
        const res = await fetch(`http://127.0.0.1:8080/api/blog/${id}`, { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data && data.data) {
                const apiPost = data.data;
                post = {
                    title: apiPost.title || "Untitled",
                    date: apiPost.dateAdded ? apiPost.dateAdded.substring(0, 10).replace(/-/g, '.') : "Unknown Date",
                    readTime: "5 min read",
                    category: apiPost.postType || "Blog",
                    coverImage: "/images/blog-cover.jpg",
                    content: apiPost.isMarkdown === 1 
                        ? await marked.parse(apiPost.body || "") 
                        : (apiPost.body || "<p>No content available.</p>")
                };
            }
        }
    } catch (e) {
        console.error("Failed to fetch blog post:", e);
    }

    if (!post) {
        return (
            <main className="bg-gray-50 min-h-screen pt-32 text-center text-gray-500">
                <p>Post not found or failed to load.</p>
                <Link href="/blog" className="text-blue-500 mt-4 inline-block hover:underline">Back to blogs</Link>
            </main>
        );
    }

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
