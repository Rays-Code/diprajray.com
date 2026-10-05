"use client";

import SectionHeading from "./SectionHeading"
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import expData from "../_data/experience";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35
    }
  }
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Experience = () => {
  const [tab, setTab] = useState("work");

  const data = tab === "work" ? expData?.work?.organisations : expData?.education?.organisations;

  return (
    <div className="flex flex-col items-center gap-2 pt-44 font-inter px-24">
      <div>
        <SectionHeading heading={expData.heading} />
      </div>

      {/* Experience Tabs */}
      <div className="pt-16">
        <div className="flex justify-between items-center bg-[#18181B] px-1 py-1 rounded-full text-md font-semibold border border-[#3F3F46]">
          <div
            className={`flex-1 text-center cursor-pointer px-11 py-1 rounded-full transition-all duration-300 ${tab === "work"
                ? "bg-[#303036] text-white border border-[#52525B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "text-[#A1A1AA] hover:text-[#E4E4E7]"
              }`}
            onClick={() => setTab("work")}
          >
            Work
          </div>

          <div
            className={`flex-1 text-center cursor-pointer px-11 py-1 rounded-full transition-all duration-300 ${tab === "education"
                ? "bg-[#303036] text-white border border-[#52525B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "text-[#A1A1AA] hover:text-[#E4E4E7]"
              }`}
            onClick={() => setTab("education")}
          >
            Education
          </div>
        </div>
      </div>


      <motion.div variants={containerVariants} initial="hidden" animate="visible" viewport={{ once: false, amount: 0.2 }} className="flex flex-col gap-4 items-center pt-12">
        {data?.map((exp, idx) => {
          return <motion.div variants={cardVariants} key={idx} className="w-full">
            <ExperienceCard org={exp} />
          </motion.div>
        })}
      </motion.div>


    </div>
  )
}

export default Experience