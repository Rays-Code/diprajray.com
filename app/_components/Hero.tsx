"use client";

import { motion } from "motion/react";
import AvailabilityBadge from "../_ui/AvailabilityBadge"
import CareerCarousel from "../_ui/CareerCarousel"
import OutlinedCTA from "../_ui/OutlinedCTA"
import ProjectButton from "../_ui/ProjectButton"
import Stats from "./Stats"
import Testimonials from "./Testimonials";
import heroData from "../_data/hero";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="min-h-screen">

      <motion.div initial={{ opacity: 0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative flex flex-col justify-center items-center lg:pt-16 pt-0">
        <AvailabilityBadge label={heroData.availability.label} country={heroData.availability.country.name} src={heroData.availability.country.src} alt={heroData.availability.country.alt}/>

        {/* Right side testimonial section */}
        <Testimonials />

        {/* Intro */}
        <div className="flex flex-col sm:gap-2 w-full sm:w-auto pl-5 sm:pl-0 items-start sm:items-center py-5 font-semibold font-cormorant-upright text-4xl lg:text-5xl">
          <div>{heroData.intro.greeting} <span className="text-2xl lg:text-4xl italic bg-white text-theme-blue rounded-full px-4 lg:px-6 pb-0.5 lg:pb-1">{heroData.intro.name}</span></div>
          <div>a <CareerCarousel /></div>
        </div>

        {/* Display text */}
        <div className="relative flex flex-col w-full sm:w-auto pl-5 sm:pl-0 items-start sm:items-center gap-1 font-space-grotesk text-5xl sm:text-4xl lg:text-6xl font-bold pt-2 sm:pt-4">
          <div className="text-3xl sm:text-4xl lg:text-6xl">{heroData.headline.firstLine}</div>
          <div>{heroData.headline.secondLine} <div className="relative inline-block">
            {heroData.headline.highlightedWord}

            <svg
              className="absolute -bottom-3 lg:-bottom-4 left-1/2 w-[110%] -translate-x-1/2 animate-underline"
              viewBox="0 0 200 40"
              fill="none"
            >
              <path
                d="M25 35 C65 22, 100 10, 180 12"
                stroke="#3038FF"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div><span className="inline-block text-3xl lg:text-6xl text-theme-blue opacity-0 animate-pop">
              .
            </span></div>
        </div>

        {/* Description Text */}
        <p className="w-full max-w-md pl-5 pr-5 sm:pl-0 sm:pr-0 pt-7 lg:pt-12 text-left sm:text-center text-base sm:text-sm lg:text-lg leading-relaxed text-pretty text-theme-gray font-space-grotesk font-normal lg:max-w-none">
          {heroData.description.line1}{" "}
          <span className="lg:block">{heroData.description.line2}</span>
        </p>

        {/* CTA Section */}
       <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-start lg:justify-center gap-4 pt-10 px-10 sm:px-0">
        <div>
          <ProjectButton label={heroData.cta.primary.label} action={heroData.cta.primary.action}/>
        </div>
        <div>
          <OutlinedCTA label={heroData.cta.secondary.label} action={heroData.cta.secondary.action} />
        </div>
       </div>

       {/* Skills section */}
        <ul className="flex flex-wrap items-center justify-center gap-2 lg:gap-2.5 pt-10">
          {heroData?.skills?.map((skill) => (
            <li
              key={skill.name}
              className={`flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5
                  text-xs lg:text-sm text-white/80 transition-colors hover:text-white cursor-pointer ${skill.hover}`}
            >
              <span className={`flex w-3 h-3 lg:h-5 lg:w-5 items-center justify-center rounded-full ${skill.iconBg}`}>
                <Image src={skill.src} width={16} height={16} alt={skill.name} className=""/>
              </span>
              {skill.name}
            </li>
          ))}
        </ul>

       {/* Horizontal divider */}
       <div className="pt-12 lg:pt-10"> 
        <div className="hidden h-[0.08px] w-[700px] max-w-[90vw] bg-theme-gray opacity-20 lg:block"></div>
       </div>

      {/* Stats Section */}
      <Stats />

      </motion.div>
    </div>
  )
}

export default Hero