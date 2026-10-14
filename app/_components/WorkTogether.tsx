import Image from "next/image";
import Link from "next/link";
import { siGithub } from "simple-icons";
import workTogetherData from "../_data/workTogether";

const GithubIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
    >
        <path d={siGithub.path} />
    </svg>
);

const WorkTogether = () => {
  return (
    <div className="flex justify-center pt-36 lg:pt-48 pl-0 lg:pl-28">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 items-center min-w-100 px-6 lg:px-0 lg:min-w-260">
      <div className="flex flex-col gap-4">
        <div className="text-[#9196FF] text-xs lg:text-sm font-medium font-hanken-grotesk flex gap-2 items-center">
          <span className="w-6 lg:w-10 h-[2px] bg-[#9196FF]"></span>
          <span>{workTogetherData.sectionLable}</span>
        </div>
        <div className="flex flex-col font-bold text-3xl lg:text-5xl text-white font-space-grotesk">
          <div>{workTogetherData.heading.line1}</div>
          <div>{workTogetherData.heading.line2.part1} <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#969AFF] to-[#000CFF]">{workTogetherData.heading.line2.part2}</span></div>
        </div>
        <div className="max-w-110 font-hanken-grotesk text-sm lg:text-lg text-white font-regular">{workTogetherData.description}</div>
        <div className="flex gap-4 pt-8">
          <a href={workTogetherData.CTA.contact.href} className="flex gap-2 justify-center items-center text-xs lg:text-base bg-theme-blue rounded-full pt-1.5 lg:pt-2 pb-1 px-4 lg:px-6 font-hanken-grotesk font-semibold shadow-2xl cursor-pointer hover:scale-102 backdrop-blur-md transition-all duration-300">
            <span>{workTogetherData.CTA.contact.name}</span>
            <span>
              <Image src="/ui/right-arrow.png" width={14} height={10} alt="up right arrow" />
            </span>
          </a>
          <a target="_blank" href={workTogetherData.CTA.github.href} className="flex gap-2 justify-center items-center text-xs lg:text-sm border-1 border-gray-400 rounded-full pt-2 pb-1  px-3 lg:px-5 font-istok-web font-semibold shadow-2xl cursor-pointer hover:scale-102 backdrop-blur-md hover:bg-gray-900 transition-all duration-300">
            <span>
              <GithubIcon />
            </span>
            <span>{workTogetherData.CTA.github.name}</span>
          </a>
        </div>
      </div>
        <div>
          <Image
            className="lg:pt-0 pt-4 md:w-[500px] md:w-[500px] lg:w-[600px] lg:h-[600px] object-contain"
            src={workTogetherData.illustration.src}
            width={600}
            height={600}
            alt={workTogetherData.illustration.name}
          />
        </div>
      </div>
    </div>
  )
}

export default WorkTogether;