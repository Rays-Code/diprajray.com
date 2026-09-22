import Link from "next/link";
import Image from "next/image";
import CTA from "../_ui/CTA";
import navData from "../_data/nav";
import { motion } from "motion/react";

const Navbar = () => {
    return (
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center items-center py-6 font-inter text-base font-medium text-[#CDCDCD]">
            <div className="flex items-center justify-between gap-45 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg px-6 rounded-full">

                {/* Profile section */}
                <div className="flex justify-center items-center">
                    {/* Logo */}
                    <div>
                        <Image src={navData.logo.src} unoptimized width={60} height={60} alt={navData.logo.name}/>
                    </div>
                    {/* Avatar */}
                    <div className="-ml-7 border-3 border-theme-blue rounded-full">
                        <Image src={navData.avatar.src} unoptimized width={25} height={25} alt={navData.avatar.name} className="rounded-full" />
                    </div>
                </div>

                {/* Nav items */}
                <div className="flex gap-6">
                    {navData.navItems.map((item) => (
                        <motion.div
                            key={item}
                            className="relative"
                            initial="rest"
                            whileHover="hover"
                        >
                            <Link href="#">
                                {item}
                            </Link>

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
    )
}

export default Navbar