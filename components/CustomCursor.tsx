'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 20, stiffness: 200 };
    const outlineX = useSpring(0, springConfig);
    const outlineY = useSpring(0, springConfig);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setDotPos({ x: e.clientX, y: e.clientY });
            outlineX.set(e.clientX);
            outlineY.set(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('.cursor-pointer')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [outlineX, outlineY]);

    return (
        <>
            <div
                className="cursor-dot"
                style={{ left: dotPos.x, top: dotPos.y }}
            />
            <motion.div
                className="cursor-outline"
                style={{
                    left: outlineX,
                    top: outlineY,
                    width: isHovered ? 60 : 40,
                    height: isHovered ? 60 : 40,
                    backgroundColor: isHovered ? 'rgba(24, 24, 27, 0.1)' : 'transparent'
                }}
            />
        </>
    );
}
