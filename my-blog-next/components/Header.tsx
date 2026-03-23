'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CloudSun, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
    }, []);
    const [weather, setWeather] = useState<{ temp: number; description: string; icon: any } | null>(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        // Fetch Real-time Weather (Shanghai)
        const fetchWeather = async () => {
            try {
                const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=31.2304&longitude=121.4737&current=temperature_2m,weather_code');
                const data = await res.json();
                const code = data.current.weather_code;
                const temp = Math.round(data.current.temperature_2m);

                // Map weather code to icon and description
                let icon = CloudSun;
                let desc = 'cloudy';

                if (code === 0) { icon = Sun; desc = 'clear'; }
                else if (code <= 3) { icon = CloudSun; desc = 'partly cloudy'; }
                else if (code <= 48) { icon = Cloud; desc = 'foggy'; }
                else if (code <= 67) { icon = CloudRain; desc = 'raining'; }
                else if (code <= 77) { icon = CloudSnow; desc = 'snowing'; }
                else if (code <= 82) { icon = CloudRain; desc = 'showers'; }
                else if (code <= 99) { icon = CloudLightning; desc = 'stormy'; }

                setWeather({ temp, description: desc, icon });
            } catch (error) {
                console.error('Weather fetch failed', error);
            }
        };

        fetchWeather();
        const weatherTimer = setInterval(fetchWeather, 300000); // 5 mins

        return () => {
            clearInterval(timer);
            clearInterval(weatherTimer);
        };
    }, []);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const WeatherIcon = weather?.icon || CloudSun;
    const weekDay = time.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className={`absolute inset-0 bg-white/70 backdrop-blur-xl transition-opacity duration-500 ${scrolled ? 'opacity-100 border-b border-gray-100 shadow-sm' : 'opacity-0'}`} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
                {/* Left: Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="cursor-pointer group pointer-events-auto"
                >
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white font-serif text-xl group-hover:rotate-[10deg] transition-transform duration-300 shadow-lg shadow-gray-200">W</div>
                        <span className="font-serif text-xl font-semibold tracking-tight hidden sm:block text-gray-900">Wade.wt</span>
                    </Link>
                </motion.div>

                {/* Center: Time & Manifesto */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hidden lg:flex flex-col items-center gap-1 pointer-events-auto"
                >
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                        <span>{mounted ? weekDay : ''}</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-gray-900">{mounted ? time.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) : ''}</span>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-gray-300 font-medium">Digital Craftsmanship</div>
                </motion.div>

                {/* Right: Info Cluster */}
                <div className="flex items-center gap-6 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hidden md:flex flex-col items-end gap-1"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Shanghai</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-medium text-gray-900">
                            <div className="flex items-center gap-1 text-gray-600">
                                <Clock className="w-3 h-3 text-gray-400" />
                                {mounted ? time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) : '--:--'}
                            </div>
                            <div className="w-px h-2 bg-gray-200" />
                            <div className="flex items-center gap-1 text-gray-600">
                                <WeatherIcon className="w-3 h-3 text-gray-400" />
                                {weather?.temp}°c
                            </div>
                        </div>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#111' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-[10px] uppercase tracking-widest font-bold transition-all shadow-md hover:shadow-xl shadow-gray-200"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get In Touch
                    </motion.button>
                </div>
            </div>

            {/* Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-900/10 origin-left"
                style={{ scaleX }}
            />
        </header>
    );
}
