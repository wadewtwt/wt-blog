'use client';

import { motion } from 'framer-motion';
import { Home, LayoutGrid, FileText, Mail } from 'lucide-react';

const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'work', label: 'Work', icon: LayoutGrid },
    { id: 'thoughts', label: 'Thoughts', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Dock() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: 100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-10 left-1/2 z-[100] flex gap-2 p-2 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all hover:gap-3"
        >
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative p-3 rounded-2xl transition-all duration-300 hover:bg-black/5 active:scale-95 cursor-pointer"
                >
                    <item.icon className="w-5 h-5 text-gray-600 transition-colors group-hover:text-gray-900" />

                    {/* Tooltip */}
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-[10px] uppercase font-bold tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-xl">
                        {item.label}
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
                    </span>

                    {/* Active Dot Indication (Simplified) */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                </button>
            ))}
        </motion.nav>
    );
}
