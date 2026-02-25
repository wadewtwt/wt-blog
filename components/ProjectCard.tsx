'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    color: string;
}

export default function ProjectCard({ title, category, image, color }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center group cursor-pointer"
        >
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 bg-gray-800 relative">
                <div className={cn("absolute inset-0 transition-colors duration-500 z-10", color, "group-hover:bg-transparent")} />
                <motion.img
                    src={image}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    alt={title}
                />
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h3 className="text-2xl font-medium mb-1">{title}</h3>
                    <p className="text-gray-400 font-sans">{category}</p>
                </div>
                <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                </span>
            </div>
        </motion.div>
    );
}
