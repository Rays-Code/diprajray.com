import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
    avatar: string,
    description: string,
    rating: number,
    name: string,
    designation: string,
    company: string,
    companyLogo: string
}

const allTestimonials: Testimonial[] = [
    {
        avatar: "/demo-avatar.png",
        description:
            "Dipraj was great to work with. He understood the requirements quickly, communicated clearly throughout the project, and delivered a polished product that worked exactly as expected.",
        rating: 5,
        name: "Ashish Patidar",
        designation: "Founder",
        company: "Lemon Studios",
        companyLogo: "/companies/lemon_studios.svg"
    },
    {
        avatar: "/demo-avatar3.avif",
        description:
            "What stood out most was Dipraj's attention to detail. He was proactive with ideas, responsive to feedback, and made sure everything was refined before delivery.",
        rating: 5,
        name: "Rahul Mehta",
        designation: "Product Manager",
        company: "TechNova",
        companyLogo: "/companies/lemon_studios.svg"
    }
];


const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);

            // Wait for the slide animation to finish
            setTimeout(() => {
                setActiveIndex((prev) =>
                    (prev + 1) % allTestimonials.length
                );

                setIsAnimating(false);
            }, 800);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const stackedTestimonials = [
        ...allTestimonials.slice(activeIndex),
        ...allTestimonials.slice(0, activeIndex),
    ];

    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="absolute right-140 top-[37%] flex flex-col items-center justify-center">
            <div className="flex justify-center items-center">
                <div>
                    <Image src="/ui/pin.svg" width={50} height={50} alt="red pin" />
                </div>
                <div className="-rotate-3 flex gap-1">
                    <div className="font-rancho text-3xl font-regular flex gap-3">
                        <span>What</span>
                        <span>People</span>
                    </div>

                    <div className="relative inline-block font-rancho text-3xl font-regular">
                        Say About Me

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

                    <span className="inline-block text-4xl text-theme-green opacity-0 animate-pop">.</span>

                </div>
            </div>

            {/* Testimonial cards */}
            <div className="relative mt-8 w-[295px] h-[250px]">

                {stackedTestimonials.map((testimonial, idx) => {
                    const isTop = idx === 0;

                    const showContent =
                        idx === 0 || (isAnimating && idx === 1);

                    return (
                        <motion.div
                            key={idx}
                            className="absolute inset-0"
                            initial={false}
                            animate={{
                                // TOP CARD → slide away
                                x: isTop && isAnimating
                                    ? 40
                                    : idx * 7,

                                y: isTop && isAnimating
                                    ? -20
                                    : idx * 10,

                                rotate: isTop && isAnimating
                                    ? 8
                                    : [-3, 3, -2, 2][idx] ?? 0,

                                scale: 1 - idx * 0.025,
                            }}
                            style={{
                                zIndex: allTestimonials.length - idx,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                        >
                            <TestimonialCard
                                {...testimonial}
                                isTop={isTop}
                                showContent={showContent}
                            />
                        </motion.div>
                    );
                })}

            </div>

        </motion.div>
    )
}

export default Testimonials