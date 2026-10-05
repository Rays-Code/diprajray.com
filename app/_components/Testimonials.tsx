"use client";

import { motion, useAnimationControls } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import testimonialData from "../_data/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setIsAnimating(true);

            timeoutRef.current = setTimeout(() => {
                setActiveIndex(
                    (prev) =>
                        (prev + 1) %
                        testimonialData.allTestimonials.length
                );

                setIsAnimating(false);
            }, 700);
        }, 3000);

        return () => {
            clearInterval(interval);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);

        // Stop any pending transition immediately
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setIsAnimating(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const stackedTestimonials = [
        ...testimonialData.allTestimonials.slice(activeIndex),
        ...testimonialData.allTestimonials.slice(0, activeIndex),
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-[calc(50%+405px)] top-[36%] flex flex-col items-center justify-center"
        >
            {/* Heading */}
            <div className="flex items-center justify-center">
                <div>
                    <Image
                        src={testimonialData.icon.src}
                        width={50}
                        height={50}
                        alt={testimonialData.icon.label}
                    />
                </div>

                <div className="-rotate-3 flex gap-1">
                    <div className="flex gap-3 font-rancho text-3xl font-regular">
                        {testimonialData.heading.words.map((word) => (
                            <span key={word}>{word}</span>
                        ))}
                    </div>

                    <div className="relative inline-block font-rancho text-3xl font-regular">
                        {testimonialData.heading.highlightedText}

                        <svg
                            className="absolute -bottom-6 left-1/2 w-[110%] -translate-x-1/2 animate-underline"
                            viewBox="0 0 200 40"
                            fill="none"
                        >
                            <path
                                d="M35 25 C65 18, 100 4, 195 1"
                                stroke="#7FFF40"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <span className="inline-block text-4xl text-theme-green opacity-0 animate-pop">
                        .
                    </span>
                </div>
            </div>

            {/* Testimonial cards */}
            <div className="relative mt-8 h-[250px] w-[295px]">
                {stackedTestimonials.map((testimonial, idx) => {
                    const isTop = idx === 0;
                    const isSecond = idx === 1;

                    const rotations = [-3, 3, -2, 2];

                    return (
                        <motion.div
                            key={idx}
                            className="absolute inset-0"
                            initial={false}
                            animate={{
                                // TOP CARD
                                ...(isTop && {
                                    x: isAnimating ? 55 : 0,
                                    y: isAnimating ? 25 : 0,
                                    rotate: isAnimating
                                        ? rotations[1]
                                        : rotations[0],
                                    scale: isAnimating ? 0.975 : 1,
                                }),

                                // SECOND CARD
                                ...(isSecond && {
                                    x: isAnimating ? 0 : 7,
                                    y: isAnimating ? 0 : 10,
                                    rotate: isAnimating
                                        ? rotations[0]
                                        : rotations[1],
                                    scale: isAnimating ? 1 : 0.975,
                                }),

                                // REMAINING CARDS
                                ...(idx > 1 && {
                                    x: idx * 7,
                                    y: idx * 10,
                                    rotate: rotations[idx] ?? 0,
                                    scale: 1 - idx * 0.025,
                                }),
                            }}
                            style={{
                                zIndex:
                                    isAnimating && isTop
                                        ? 1
                                        : testimonialData.allTestimonials.length -
                                        idx,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        >
                            <TestimonialCard
                                {...testimonial}
                                isTop={isTop}
                                contentOpacity={
                                    isTop
                                        ? isAnimating
                                            ? 0.1
                                            : 1
                                        : isSecond
                                            ? isAnimating
                                                ? 1
                                                : 0
                                            : isAnimating
                                                ? 0.15
                                                : 0
                                }
                                showDots={isTop}
                                activeIndex={activeIndex}
                                totalTestimonials={
                                    testimonialData.allTestimonials.length
                                }
                            />
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Testimonials;