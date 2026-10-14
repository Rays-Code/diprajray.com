"use client";

import SectionHeading from "./SectionHeading";
import projectData from "../_data/projects";
import ProjectCard from "./ProjectCard";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="pt-68 sm:pt-12 lg:pt-0">
        <SectionHeading heading={projectData.heading} />
      </div>

      <div className="flex w-full justify-center pt-12 sm:pt-20 lg:pt-26">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full max-w-[1200px] grid-cols-1 gap-10 px-4 sm:px-5 lg:gap-16 lg:px-0"
        >
          {projectData?.projects?.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="w-full min-w-0"
            >
              <ProjectCard proj={proj} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;