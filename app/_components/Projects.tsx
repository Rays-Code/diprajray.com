"use client";

import SectionHeading from "./SectionHeading"
import projectData from "../_data/projects";
import ProjectCard from "./ProjectCard";
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


const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <div>
        <SectionHeading heading={projectData.heading}/>
      </div>

      <div className="flex justify-center items-center pt-26 min-w-full">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="min-w-[1200px] grid grid-cols-1 gap-16">
         {projectData?.projects?.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
            >
              <ProjectCard proj={proj}/>
            </motion.div>
          ))}
      </motion.div>
      </div>
    </div>
  )
}

export default Projects