"use client";

import { motion } from "motion/react";
import AvailabilityBadge from "../_ui/AvailabilityBadge"
import CareerCarousel from "../_ui/CareerCarousel"
import OutlinedCTA from "../_ui/OutlinedCTA"
import ProjectButton from "../_ui/ProjectButton"
import Navbar from "./Navbar"
import Stats from "./Stats"
import Testimonials from "./Testimonials";
import heroData from "../_data/hero";


const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('/bg/hero_bg.png')] pt-8">

      <Navbar />

      <motion.div initial={{ opacity: 0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative flex flex-col justify-center items-center pt-24">
        <AvailabilityBadge label={heroData.availability.label} />

        {/* Right side testimonial section */}
        <Testimonials />

        {/* Intro */}
        <div className="flex flex-col gap-2 items-center py-5 font-semibold font-cormorant-upright text-5xl">
          <div>{heroData.intro.greeting} <span className="text-4xl italic bg-white text-theme-blue rounded-full px-6 pb-1">{heroData.intro.name}</span></div>
          <div>a <CareerCarousel /> </div>
        </div>

        {/* Display text */}
        <div className="relative flex flex-col items-center gap-1 font-space-grotesk text-7xl font-bold">
          <div>{heroData.headline.firstLine}</div>
          <div>{heroData.headline.secondLine} <div className="relative inline-block">
            {heroData.headline.highlightedWord}

            <svg
              className="absolute -bottom-6 left-1/2 w-[110%] -translate-x-1/2 animate-underline"
              viewBox="0 0 200 40"
              fill="none"
            >
              <path
                d="M25 35 C65 22, 100 10, 180 12"
                stroke="#3038FF"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div><span className="inline-block text-6xl text-theme-blue opacity-0 animate-pop">
              .
            </span></div>
        </div>

        {/* Description Text */}
        <div className="flex flex-col items-center pt-12 text-theme-gray text-lg font-space-grotesk font-normal">
          <div>
            <span>{heroData.description.line1} </span>
          </div>
          <div>
            <span>{heroData.description.line2}</span>
          </div>
        </div>

        {/* CTA Section */}
       <div className="flex items-center justify-center gap-4 pt-12">
        <div>
          <ProjectButton label={heroData.cta.primary.label} action={heroData.cta.primary.action}/>
        </div>
        <div>
          <OutlinedCTA label={heroData.cta.secondary.label} action={heroData.cta.secondary.action} />
        </div>
       </div>

       {/* Horizontal divider */}
       <div className="pt-14">
        <div className="h-[0.08px] w-[700px] bg-theme-gray opacity-20"></div>
       </div>

      {/* Stats Section */}
      <Stats />

      </motion.div>
    </div>
  )
}

export default Hero