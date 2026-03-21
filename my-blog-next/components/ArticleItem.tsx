'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ArticleItemProps {
    title: string;
    date: string;
    excerpt: string;
    delay: number;
}

export default function ArticleItem({ title, date, excerpt, delay }: ArticleItemProps) {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return (
        <Link href={`/blog/${slug}`} className="block">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: delay }}
                className="group cursor-pointer border-b border-transparent hover:border-gray-100 transition-all pb-4"
            >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-medium group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <span className="text-sm text-gray-400 font-mono italic">
                        {date}
                    </span>
                </div>
                <p className="text-gray-500 line-clamp-2 max-w-2xl">
                    {excerpt}
                </p>
            </motion.article>
        </Link>
    );
}
