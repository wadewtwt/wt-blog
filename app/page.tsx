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
        <main className="snap-container no-scrollbar">
            <Header />
            <NoiseBackground />
            <Dock />

            {/* Hero Section */}
            <section id="hero" className="snap-section px-6 md:px-20">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-gray-500"
                    >
                        Portfolio 2024
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scaleY: 1.1, y: 50 }}
                        whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                        className="font-serif text-6xl md:text-9xl leading-[0.9] mb-8"
                    >
                        CODE & <br />
                        <span className="italic text-gray-400 text-[0.85em]">LIFE</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-200 pt-8 mt-12"
                    >
                        <div className="max-w-md mb-8 md:mb-0">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Exploring the boundary between logical systems and artistic chaos.
                                Building digital experiences that breathe.
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold">Shanghai based</p>
                            <p className="text-gray-500">Available for freelance</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Works Section */}
            <section id="work" className="snap-section bg-[#18181B] text-white px-0 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#4f4f4f 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                <div className="px-6 md:px-20 py-20 h-full flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl mb-12 mix-blend-difference"
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
            <section id="thoughts" className="snap-section px-6 md:px-20">
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
            <section id="contact" className="snap-section px-6 md:px-20 bg-[#18181B] text-white">
                <div className="max-w-5xl mx-auto w-full text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-sm uppercase tracking-[0.2em] mb-8 text-gray-500"
                    >
                        Get in Touch
                    </motion.p>
                    <motion.a
                        href="mailto:hello@example.com"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-5xl md:text-8xl hover:text-gray-300 transition-colors block mb-12 cursor-pointer"
                    >
                        hello@example.com
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-8"
                    >
                        <a href="#" className="text-lg hover:underline underline-offset-4 cursor-pointer">GitHub</a>
                        <a href="#" className="text-lg hover:underline underline-offset-4 cursor-pointer">Twitter</a>
                        <a href="#" className="text-lg hover:underline underline-offset-4 cursor-pointer">Instagram</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-32 text-gray-600 text-sm"
                    >
                        &copy; 2024 Digital Artisan. Designed with purpose.
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
