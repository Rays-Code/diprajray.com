import Image from "next/image";
import { siGithub } from "simple-icons";
import workTogetherData from "../_data/workTogether";

const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d={siGithub.path} />
  </svg>
);

const WorkTogether = () => {
  return (
    <section className="flex justify-center px-5 pt-24 pb-16 sm:px-8 lg:pb-0 lg:pl-20 lg:pt-48">
      <div className="flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

        {/* Section label */}
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <div className="flex items-center justify-center gap-3 font-hanken-grotesk text-xs font-medium uppercase tracking-wider text-[#9196FF] lg:justify-start lg:gap-2 lg:text-sm">
            <span className="h-[2px] w-8 bg-[#9196FF] lg:w-10" />
            <span>{workTogetherData.sectionLable}</span>
          </div>

          {/* Heading */}
          <h2 className="flex flex-col font-space-grotesk text-[clamp(1.2rem,6vw,2rem)] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="whitespace-nowrap">{workTogetherData.heading.line1}</span>
            <span className="whitespace-nowrap">
              {workTogetherData.heading.line2.part1}{" "}
              <span className="bg-gradient-to-r from-[#969AFF] to-[#000CFF] bg-clip-text text-transparent">
                {workTogetherData.heading.line2.part2}
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-md font-hanken-grotesk text-[0.9rem] font-normal leading-relaxed text-white/70 text-pretty sm:text-base lg:mx-0 lg:max-w-110 lg:text-lg lg:text-white">
            {workTogetherData.description}
          </p>

          {/* CTAs */}
          <div className="flex w-full flex-col gap-3 pt-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4 lg:justify-start lg:pt-8">
            <a
              href={workTogetherData.CTA.contact.href}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-theme-blue px-6 pt-0.5 font-hanken-grotesk text-base font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-102 sm:w-auto lg:h-auto lg:pb-1 lg:pt-2"
            >
              <span>{workTogetherData.CTA.contact.name}</span>
              <Image src="/ui/right-arrow.png" width={14} height={10} alt="" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={workTogetherData.CTA.github.href}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-500 px-6 pt-0.5 font-istok-web text-base font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-102 hover:bg-gray-900 sm:w-auto lg:h-auto lg:pb-1 lg:pt-2 lg:text-sm"
            >
              <GithubIcon />
              <span>{workTogetherData.CTA.github.name}</span>
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center lg:block">
          <Image
            className="w-full max-w-[300px] object-contain sm:max-w-[380px] xl:max-w-[520px]"
            src={workTogetherData.illustration.src}
            width={600}
            height={600}
            alt={workTogetherData.illustration.name}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;