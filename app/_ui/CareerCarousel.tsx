"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import heroData from "../_data/hero";

const CareerCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroData.intro.careers.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.span
            layout
            className="
                inline-block
                italic
                font-cormorant-upright
                font-semibold
                text-4xl
                bg-theme-blue
                text-white
                rounded-full
                px-6
                pb-1
            "
            transition={{
                layout: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
            }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={heroData.intro.careers[index]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >
                    {heroData.intro.careers[index]}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    );
};

export default CareerCarousel;