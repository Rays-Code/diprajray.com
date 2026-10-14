"use client";

import Link from "next/link";
import Image from "next/image";
import CTA from "../_ui/CTA";
import navData from "../_data/nav";
import { motion, AnimatePresence  } from "motion/react";
import { useState, useRef} from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>(null);

    const hoverCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(navData?.email);
        } catch (err) {
            console.error("Failed to copy email: ", navData?.email);
        }
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(navData?.email);
            setCopied(true);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy email: ", navData?.email);
        }
    };

    return (
        <>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="hidden lg:flex fixed top-0 left-0 z-50 w-full justify-center items-center pt-16 pb-6 font-inter text-base font-medium text-[#CDCDCD]">
            <div className="flex items-center justify-between gap-45 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg px-6 rounded-full">

                {/* Profile section */}
                <a href="#" className="flex justify-center items-center" onMouseEnter={() => hoverCopyEmail()}>
                    {/* Logo */}
                    <div>
                        <Image src={navData.logo.src} unoptimized width={60} height={60} alt={navData.logo.name}/>
                    </div>
                    {/* Avatar */}
                    <div className="-ml-7 border-3 border-theme-blue rounded-full cursor-pointer hover:-rotate-7 hover:scale-108 transition-all duration-300">
                        <Image src={navData.avatar.src} unoptimized width={25} height={25} alt={navData.avatar.name} className="rounded-full" />
                    </div>
                </a>

                {/* Nav items */}
                <div className="flex gap-6">
                    {navData.navItems.map((option, idx) => (
                        <motion.div
                            key={idx}
                            className="relative"
                            initial="rest"
                            whileHover="hover"
                        >
                            <a href={option?.href} rel="noopener noreferrer" onClick={(e) => {
                                if (option.name === "Resume") {
                                    e.preventDefault();

                                    window.open(option.href, "_blank");

                                    const link = document.createElement("a");
                                    link.href = option.href;
                                    link.download = "Dipraj-Ray-Resume.pdf";
                                    link.click();
                                }
                            }}>
                                {option?.name}
                            </a>

                            <motion.span
                                className="absolute -bottom-1 left-0 h-[2px] w-full bg-theme-blue"
                                variants={{
                                    rest: {
                                        scaleX: 0,
                                    },
                                    hover: {
                                        scaleX: 1,
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                style={{ transformOrigin: "center" }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* CTA button */}
                <div>
                    <CTA label={navData.cta.label} action={navData.cta.action} />
                </div>

            </div>
        </motion.div>

            {/* Mobile Menu */}
            <div className="lg:hidden fixed top-0 left-0 z-50 min-w-screen px-4 pt-5">

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>

                {/* Pill */}
                <div className="rounded-[28px] border border-white/10 bg-[#1C1C1F]/80 shadow-lg backdrop-blur-xl">

                    {/* Header row */}
                    <div className="flex h-14 items-center justify-between pl-4 pr-3">
                        <div className="flex items-center gap-2.5">
                            <button
                                type="button"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                                onClick={() => {
                                    setIsMenuOpen((open) => !open);
                                    setSelectedOption("");
                                }}
                                className="flex h-8 w-8 items-center justify-center"
                            >
                                {isMenuOpen ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                                        <path d="M6 6l12 12M18 6L6 18" />
                                    </svg>
                                ) : (
                                    <Image src="/ui/menu.svg" width={30} height={30} alt="" />
                                )}
                            </button>

                            {/* Avatar */}
                            <div className="cursor-pointer rounded-full border-3 border-theme-blue transition-all duration-300 hover:-rotate-7 hover:scale-108">
                                <Image
                                    src={navData.avatar.src}
                                    unoptimized
                                    width={25}
                                    height={25}
                                    alt={navData.avatar.name}
                                    className="rounded-full"
                                />
                            </div>
                        </div>

                        <div onClick={() => setIsMenuOpen(false)}>
                            <CTA label={navData.cta.label} action={navData.cta.action} />
                        </div>
                    </div>

                    {/* Expanding menu */}
                    <AnimatePresence initial={false}>
                        {isMenuOpen && (
                            <motion.div
                                id="mobile-menu"
                                className="overflow-hidden"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    closed: { height: 0, opacity: 0 },
                                    open: {
                                        height: "auto",
                                        opacity: 1,
                                        transition: {
                                            duration: 0.35,
                                            ease: "easeInOut",
                                            when: "beforeChildren",
                                            staggerChildren: 0.06,
                                        },
                                    },
                                }}
                            >
                                {/* Divider */}
                                <div className="mx-4 h-px bg-white/10" />

                                {/* Links */}
                                <nav className="px-2 py-1.5">
                                    {navData.navItems.map((option, idx) => {
                                        const active = selectedOption === option.name;
                                        return (
                                            <motion.div
                                                key={option.name}
                                                variants={{
                                                    closed: { opacity: 0, y: -8 },
                                                    open: { opacity: 1, y: 0 },
                                                }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                            >
                                                <a
                                                    href={option?.href}
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => {
                                                        setSelectedOption(option.name);

                                                        if (option.name === "Resume") {
                                                            e.preventDefault();
                                                            window.open(option.href, "_blank");

                                                            const link = document.createElement("a");
                                                            link.href = option.href;
                                                            link.download = "Dipraj-Ray-Resume.pdf";
                                                            link.click();
                                                        }

                                                        setIsMenuOpen(false);
                                                    }}
                                                    className={`flex h-[54px] items-center justify-between rounded-[14px] px-3 font-inter text-lg font-medium transition-colors ${active ? "bg-white/10 text-white" : "text-white/90 active:bg-white/5"
                                                        }`}
                                                >
                                                    {option?.name}
                                                    <svg
                                                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className={active ? "text-[#9196FF]" : "text-white/40"}
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M7 17L17 7M8 7h9v9" />
                                                    </svg>
                                                </a>

                                                {idx !== navData.navItems.length - 1 && (
                                                    <div className="mx-3 h-px bg-white/10" />
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </nav>

                                {/* Email footer */}
                                <motion.div
                                    variants={{
                                        closed: { opacity: 0, y: -8 },
                                        open: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <div className="mx-4 h-px bg-white/10" />

                                    <div className="px-5 pb-[18px] pt-3.5">
                                        <div className="flex items-center justify-between">
                                            <span className="font-space-grotesk text-xs font-bold uppercase tracking-widest text-[#9196FF]">
                                                Email
                                            </span>

                                            {/* Copy button */}
                                            <div className="relative -my-1.5 -mr-1.5">
                                                <div className="pointer-events-none absolute bottom-full right-0 z-10 mb-2">
                                                    <AnimatePresence>
                                                        {copied && (
                                                            <motion.div
                                                                role="status"
                                                                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: 6, scale: 0.9 }}
                                                                transition={{ duration: 0.15 }}
                                                                className="relative whitespace-nowrap rounded-md bg-[#9196FF] px-3 py-1.5 font-hanken-grotesk text-sm font-medium text-black"
                                                            >
                                                                Copied!
                                                                <span className="absolute right-3.5 top-full -mt-1 h-2 w-2 rotate-45 bg-[#9196FF]" />
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={copyEmail}
                                                    aria-label="Copy email address"
                                                    className="cursor-pointer rounded-lg bg-[#2A2A2E] p-2 opacity-80 transition-all duration-200 hover:scale-105 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-[#9196FF]"
                                                >
                                                    <Image src="/ui/copy.png" width={17} height={17} alt="" />
                                                </button>
                                            </div>
                                        </div>

                                        <a href={`mailto:${navData?.email}`} className="mt-0.5 block break-all font-hanken-grotesk text-sm text-white hover:underline">
                                            {navData?.email}
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}

export default Navbar