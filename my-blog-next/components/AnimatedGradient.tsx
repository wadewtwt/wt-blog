'use client';

import { motion } from 'framer-motion';

export default function AnimatedGradient() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* 主色调：生动的薄荷绿 / 青色 */}
            <motion.div
                animate={{
                    x: [0, 150, -100, 0],
                    y: [0, -100, 80, 0],
                    rotate: [0, 30, -25, 0],
                    scale: [1, 1.25, 0.85, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] right-[-10%] w-[900px] h-[800px] bg-gradient-to-br from-emerald-300/60 via-teal-300/40 to-transparent rounded-[40%] blur-[120px] will-change-transform"
            />
            
            {/* 辅色调：同色系青绿交融，增强动态风效 */}
            <motion.div
                animate={{
                    x: [0, -180, 120, 0],
                    y: [0, 150, -80, 0],
                    rotate: [0, -35, 20, 0],
                    scale: [1, 0.8, 1.3, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute bottom-[-15%] left-[-10%] w-[1000px] h-[700px] bg-gradient-to-tr from-emerald-400/50 via-teal-200/40 to-transparent rounded-[45%] blur-[130px] will-change-transform"
            />
        </div>
    );
}
