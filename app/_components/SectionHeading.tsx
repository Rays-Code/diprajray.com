"use client"

import { motion } from "motion/react";
import SectionHeadingProps from "../_types/sectionHeading";

const SectionHeading = ({ heading }: { heading: SectionHeadingProps[] }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3}} className="flex justify-center items-center gap-4">
        {heading.map((heading, idx) => {
            return <div key={idx} className={`${heading.tone === "primary"? "text-theme-blue": "text-white"} text-6xl font-bold`}>{heading.word}</div>
        })}
    </motion.div>
  )
}

export default SectionHeading