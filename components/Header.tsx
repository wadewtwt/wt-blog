'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CloudSun, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Clock, MapPin } from 'lucide-react';

export default function Header() {
    const [time, setTime] = useState(new Date());
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

    const WeatherIcon = weather?.icon || CloudSun;

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:px-12 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-end items-start text-foreground">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-end gap-1 font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400"
                >
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-foreground font-medium">Available for new projects</span>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Time & Location */}
                        <div className="flex items-center gap-3 pointer-events-auto">
                            <div className="flex items-center gap-1.5 min-w-[65px] justify-end">
                                <Clock className="w-3 h-3 text-foreground/60" />
                                <span>{time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                            </div>
                            <div className="flex items-center gap-1.5 border-l border-foreground/10 pl-3">
                                <MapPin className="w-3 h-3 text-foreground/60" />
                                <span>SHANGHAI, CN</span>
                            </div>
                        </div>

                        {/* Weather Real-time */}
                        <div className="flex items-center gap-1.5 border-l border-foreground/10 pl-3 lowercase tracking-normal font-medium text-foreground/80 min-w-[80px] justify-end">
                            <WeatherIcon className="w-3.5 h-3.5" />
                            <span>{weather ? `${weather.temp}°c ${weather.description}` : 'loading...'}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/10 origin-left"
                style={{ scaleX }}
            />
        </header>
    );
}
