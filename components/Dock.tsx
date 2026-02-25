'use client';

import { Home, LayoutGrid, FileText, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex gap-4 p-3 bg-white/80 backdrop-blur-xl rounded-full border border-black/5 shadow-2xl transition-all hover:gap-6">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative p-2 rounded-full transition-all hover:-translate-y-2 hover:bg-black/5 cursor-pointer"
                >
                    <item.icon className="w-6 h-6 text-foreground" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                        {item.label}
                    </span>
                </button>
            ))}
        </nav>
    );
}
