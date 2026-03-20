'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    span?: string;
}

export default function ProjectCard({ title, category, image, span }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn("group cursor-pointer rounded-2xl overflow-hidden relative isolate w-full h-full", span)}
        >
            {/* Image Layer */}
            <motion.img
                src={image}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt={title}
            />

            {/* Hover Dark Overlay Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />

            {/* Content Layer (Slide up reveal) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 pointer-events-none">
                <div className="flex justify-between items-end overflow-hidden">
                    <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-[0.19,1,0.22,1]">
                        <h3 className="text-2xl md:text-3xl font-medium mb-1 text-white">{title}</h3>
                        <p className="text-white/80 font-sans text-sm tracking-widest uppercase">{category}</p>
                    </div>
                    
                    <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[0.19,1,0.22,1] shadow-lg">
                        <ArrowUpRight className="w-5 h-5" />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
