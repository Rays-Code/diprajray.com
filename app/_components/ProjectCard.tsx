import Image from "next/image";
import { Globe } from "lucide-react";
import { siGithub } from "simple-icons";
import { ArrowUpRight } from "lucide-react";
import projectData from "../_data/projects";
import { Project } from "../_types/projects";

const GithubIcon = ({active}: {active: boolean}) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        className={`${active? "opacity-100": "opacity-70"}`}
    >
        <path d={siGithub.path} />
    </svg>
);


const ProjectCard = ({ proj }: { proj: Project }) => {
    return (
        <>
            <div key={proj?.heading?.text} className="relative flex flex-col lg:flex-row item-start lg:items-center justify-between lg:min-w-full min-w-0 max-w-200 min-h-0 lg:min-h-75 lg:pr-6 pb-0 lg:pb-12 backdrop-blur-lg bg-[#18181B] shadow-xl cursor-pointer rounded-lg overflow-hidden group">

                {proj?.banner?.pos === "left" ? <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-start lg:justify-between">
                    <div className="max-lg:@container [--sw:min(29cqw,176px)] [--sh:min(64cqw,387px)] [--ty-side:min(6cqw,36px)] [--ty-mid:0px] [--sb:min(10cqw,60px)] [--sg:min(1cqw,8px)] [--wh:min(78cqw,471px)]">
                        <div className={`relative w-full lg:h-full ${proj?.banner?.type === "image" ? "h-(--wh)" : "h-[17.5rem] md:h-[22.5rem]"}`}>
                            {proj?.banner?.type === "image" ? (
                                <div className="pointer-events-none lg:pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-(--sb) w-max min-h-40 lg:w-auto lg:translate-x-0 lg:left-16 lg:-bottom-14 lg:min-w-156">

                                    <div className="flex justify-center lg:justify-start items-end gap-(--sg) lg:gap-3 max-w-none lg:max-w-125">
                                        {proj?.banner?.screens?.map((screen) => (
                                            <div
                                                key={screen?.name}
                                                className={`relative shrink-0 lg:shrink w-(--sw) h-(--sh) lg:w-38 lg:h-78 overflow-hidden rounded-t-lg ${screen?.pos === "left"
                                                    ? "-rotate-4 translate-y-(--ty-side) lg:translate-y-46 group-hover:-rotate-7 lg:group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                    : screen?.pos === "right"
                                                        ? "rotate-7 translate-y-(--ty-side) lg:translate-y-46 group-hover:rotate-9 lg:group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                        : "rotate-0 translate-y-(--ty-mid) lg:translate-y-38 lg:group-hover:translate-y-34 group-hover:scale-102 transition-all duration-400"
                                                    }`}
                                            >
                                                <Image
                                                    src={screen?.src}
                                                    alt={screen?.name}
                                                    fill
                                                    sizes="160px"
                                                    quality={100}
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            ) : (
                                <div
                                style={{ "--video-width": proj?.banner?.videoWidth } as React.CSSProperties}
                                className="absolute top-4 left-1/2 -translate-x-1/2 h-60 md:h-80 w-[85%] overflow-hidden rounded-xl lg:rounded-t-xl -rotate-2 transition-all duration-500 group-hover:-rotate-4 group-hover:-bottom-18 group-hover:scale-102 lg:top-auto lg:translate-x-0 lg:-bottom-20 lg:left-16 lg:h-77 lg:w-[var(--video-width)]">
                                    <video
                                     src={proj.banner?.video}
                                     autoPlay
                                     muted
                                     loop
                                     playsInline
                                     className="absolute inset-0 h-full w-full object-cover"
                                    />
                               </div>
                            )}

                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="px-6 md:px-8 lg:px-0">
                        <div className="flex flex-col items-start lg:items-end">
                            {/* Heading */}
                            <div className="pt-8 pb-2 flex justify-end max-w-full lg:max-w-420">
                                <div>
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi tracking-[-1px] break-words">
                                        {proj?.heading?.text}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="pt-1 pb-4 max-w-full lg:max-w-164">
                                <div>
                                    <p className="font-inter text-sm md:text-base text-gray-500 font-regular text-left lg:text-right break-words">
                                        {proj?.description?.text}
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Tech Used */}
                        <div className="flex justify-start lg:justify-end flex-wrap gap-2">
                            {proj.technologies?.map((tech, idx) => {
                                return <div key={idx}>
                                    <span>
                                        <Image src={tech?.src} width={36} height={32} alt={tech?.name} className="rounded-md" />
                                    </span>
                                    {/* <span className="text-xs font-regular font-inter">{tech?.name}</span> */}
                                </div>
                            })}
                        </div>

                        {/* Live site & Github buttons */}
                        <div className="flex items-center justify-start lg:justify-end gap-4 pt-3 pb-6 text-white">

                            {/* Live site */}
                            <a href={proj?.live?.url} target="_blank" className={`flex justify-center items-center gap-2 px-3 md:px-4 py-2 rounded-lg ${proj?.live?.color} font-normal font-google-sans-code text-white text-sm md:text-base cursor-pointer shadow-2xl hover:scale-102 backdrop-blur-md transition-all duration-100`}>
                                <div>
                                    <Globe size={16} className="opacity-80" />
                                </div>
                                <div>View Project</div>
                            </a>

                            {/* Github button */}
                            <a
                                href={proj?.githubUrl || undefined}
                                target={proj?.githubUrl ? "_blank" : undefined}
                                rel={proj?.githubUrl ? "noopener noreferrer" : undefined}
                                className={`flex gap-2 justify-center items-center border border-gray-700 rounded-lg py-2 px-3 md:px-4 text-sm md:text-base font-normal font-google-sans-code shadow-2xl backdrop-blur-md transition-all duration-100
                                ${proj?.githubUrl
                                        ? "cursor-pointer hover:scale-102 hover:bg-gray-900 hover:text-white"
                                        : "cursor-not-allowed pointer-events-none"
                                    }`}
                            >
                                <GithubIcon active={!!proj?.githubUrl}/>

                                <span className={!proj?.githubUrl ? "text-gray-400" : ""}>
                                    {proj?.githubUrl ? "Source Code" : "Private"}
                                </span>
                            </a>

                        </div>
                    </div>
                </div> : <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between">
                    <div className="px-6 md:px-8 lg:pl-8 lg:pr-0">
                        <div className="flex flex-col items-start">
                            {/* Heading */}
                            <div className="pt-8 pb-2 flex justify-start max-w-full">
                                <div>
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi tracking-[-1px] break-words">
                                        {proj?.heading?.text}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="pt-1 pb-4 max-w-full lg:max-w-140">
                                <div>
                                    <p className="font-inter text-sm md:text-base text-gray-500 font-regular text-left break-words">
                                        {proj?.description?.text}
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Tech Used */}
                        <div className="flex justify-start flex-wrap gap-2">
                            {proj.technologies?.map((tech, idx) => {
                                return <div key={idx}>
                                    <span>
                                        <Image src={tech?.src} width={36} height={32} alt={tech?.name} className="rounded-md" />
                                    </span>
                                    {/* <span className="text-xs font-regular font-inter">{tech?.name}</span> */}
                                </div>
                            })}
                        </div>

                        {/* Live site & Github buttons */}
                        <div className="flex items-center justify-start gap-4 pt-3 pb-6 text-white">

                            {/* Live site */}
                            <a href={proj?.live?.url} target="_blank" className={`flex justify-center items-center gap-2 px-3 md:px-4 py-2 rounded-lg ${proj.live.color} font-normal font-google-sans-code text-white text-sm md:text-base cursor-pointer shadow-2xl hover:scale-102 backdrop-blur-md transition-all duration-100`}>
                                <div>
                                    <Globe size={16} className="opacity-80" />
                                </div>
                                <div>View Project</div>
                            </a>

                            {/* Github button */}
                            <a
                                href={proj?.githubUrl || undefined}
                                target={proj?.githubUrl ? "_blank" : undefined}
                                rel={proj?.githubUrl ? "noopener noreferrer" : undefined}
                                className={`flex gap-2 justify-center items-center border border-gray-700 rounded-lg py-2 px-3 md:px-4 text-sm md:text-base font-normal font-google-sans-code shadow-2xl backdrop-blur-md transition-all duration-100
                                ${proj?.githubUrl
                                        ? "cursor-pointer hover:scale-102 hover:bg-gray-900 hover:text-white"
                                        : "cursor-not-allowed pointer-events-none"
                                    }`}
                            >
                                <GithubIcon active={!!proj?.githubUrl}/>

                                <span className={!proj?.githubUrl ? "text-gray-400" : ""}>
                                    {proj?.githubUrl ? "Source Code" : "Private"}
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="max-lg:@container [--sw:min(29cqw,176px)] [--sh:min(64cqw,387px)] [--ty-side:min(6cqw,36px)] [--ty-mid:0px] [--sb:min(10cqw,60px)] [--sg:min(1cqw,8px)] [--wh:min(78cqw,471px)]">
                        <div className={`relative w-full lg:h-full ${proj?.banner?.type === "image" ? "h-(--wh)" : "h-[17.5rem] md:h-[22.5rem]"}`}>
                            {proj?.banner?.type === "image" ? (
                                <div className="pointer-events-none lg:pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-(--sb) w-max min-h-40 lg:w-auto lg:translate-x-0 lg:left-auto lg:right-0 lg:bottom-auto lg:-top-30 lg:min-w-130">

                                    <div className="flex justify-center lg:justify-start items-end gap-(--sg) lg:gap-3 max-w-none lg:max-w-125">
                                        {proj?.banner?.screens?.map((screen) => (
                                            <div
                                                key={screen?.name}
                                                className={`relative shrink-0 lg:shrink w-(--sw) h-(--sh) lg:w-38 lg:h-82 overflow-hidden rounded-lg lg:rounded-t-lg ${screen?.pos === "left"
                                                    ? "-rotate-4 translate-y-(--ty-side) lg:translate-y-46 group-hover:-rotate-7 lg:group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                    : screen?.pos === "right"
                                                        ? "rotate-7 translate-y-(--ty-side) lg:translate-y-46 group-hover:rotate-9 lg:group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                        : "rotate-0 translate-y-(--ty-mid) lg:translate-y-38 lg:group-hover:translate-y-34 group-hover:scale-102 transition-all duration-400"
                                                    }`}
                                            >
                                                <Image
                                                    src={screen?.src}
                                                    alt={screen?.name}
                                                    fill
                                                    sizes="160px"
                                                    quality={100}
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            ) : (
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-60 md:h-80 w-[85%] overflow-hidden rounded-xl lg:rounded-t-xl rotate-2 group-hover:rotate-4 group-hover:-bottom-16 group-hover:scale-102 transition-all duration-500 lg:top-auto lg:left-auto lg:translate-x-0 lg:right-12 lg:-bottom-18 lg:w-95 lg:h-77">
                                    <video
                                        src={proj?.banner?.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default ProjectCard;