import Image from "next/image";
import { Globe } from "lucide-react";
import { siGithub } from "simple-icons";
import { ArrowUpRight } from "lucide-react";
import projectData from "../_data/projects";
import { Project } from "../_types/projects";

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


const ProjectCard = ({ proj }: { proj: Project }) => {
    return (
        <>
            <div key={proj.heading.text} className="relative flex items-center justify-between min-w-full min-h-75 pr-6 pb-12 backdrop-blur-lg bg-[#18181B] shadow-xl cursor-pointer rounded-lg overflow-hidden group">

                {proj.banner?.pos === "left" ? <div className="w-full h-full flex justify-between">
                    <div>
                        <div className="relative h-full">
                            {proj.banner?.type === "image" ? (
                                <div className="absolute left-16 -bottom-14 min-w-156 min-h-40">

                                    <div className="flex justify-start items-end gap-3 max-w-125">
                                        {proj.banner.screens?.map((screen) => (
                                            <div
                                                key={screen.name}
                                                className={`relative w-38 h-78 overflow-hidden rounded-t-lg ${screen.pos === "left"
                                                    ? "-rotate-4 translate-y-46 group-hover:-rotate-7 group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                    : screen.pos === "right"
                                                        ? "rotate-7 translate-y-46 group-hover:rotate-9 group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                        : "rotate-0 translate-y-38 group-hover:translate-y-34 group-hover:scale-102 transition-all duration-400"
                                                    }`}
                                            >
                                                <Image
                                                    src={screen.src}
                                                    alt={screen.name}
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
                                <div style={{ width: proj?.banner.videoWidth }} className={`absolute -bottom-20 left-16 h-77 overflow-hidden rounded-t-xl -rotate-2 group-hover:-rotate-4 group-hover:-bottom-18 group-hover:scale-102 transition-all duration-500`}>
                                    <video
                                        src={proj.banner?.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            )}

                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-end">
                            {/* Heading */}
                            <div className="pt-8 pb-2 flex justify-end max-w-420">
                                <div>
                                    <span className="text-5xl font-bold font-satoshi tracking-[-1px] break-words">
                                        {proj.heading.text}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="pt-1 pb-4 max-w-164">
                                <div>
                                    <p className="font-inter text-md text-gray-500 font-regular text-right">
                                        {proj.description.text}
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Tech Used */}
                        <div className="flex justify-end flex-wrap gap-2">
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
                        <div className="flex items-center justify-end gap-4 pt-3 pb-6 text-white">

                            {/* Live site */}
                            <a href={proj.live.url} target="_blank" className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg ${proj.live.color} font-normal font-google-sans-code text-white text-md cursor-pointer shadow-2xl hover:scale-102 backdrop-blur-md transition-all duration-100`}>
                                <div>
                                    <Globe size={16} className="opacity-80" />
                                </div>
                                <div>View Project</div>
                            </a>

                            {/* Github button */}
                            <a href={proj.githubUrl} target="_blank" className="flex gap-2 justify-center items-center border border-gray-700 rounded-lg py-2 px-4 text-md font-normal font-google-sans-code shadow-2xl cursor-pointer hover:scale-102 hover:bg-gray-900 hover:text-white backdrop-blur-md transition-all duration-100">
                                <div>
                                    <GithubIcon />
                                </div>
                                <div>Source Code</div>
                            </a>

                        </div>
                    </div>
                </div> : <div className="w-full h-full flex justify-between">
                    <div className="pl-8">
                        <div className="flex flex-col items-start">
                            {/* Heading */}
                            <div className="pt-8 pb-2 flex justify-start max-w-420">
                                <div>
                                    <span className="text-5xl font-bold font-satoshi tracking-[-1px] break-words">
                                        {proj.heading.text}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="pt-1 pb-4 max-w-140">
                                <div>
                                    <p className="font-inter text-md text-gray-500 font-regular text-left">
                                        {proj.description.text}
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
                            <a href={proj.live.url} target="_blank" className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg ${proj.live.color} font-normal font-google-sans-code text-white text-md cursor-pointer shadow-2xl hover:scale-102 backdrop-blur-md transition-all duration-100`}>
                                <div>
                                    <Globe size={16} className="opacity-80" />
                                </div>
                                <div>View Project</div>
                            </a>

                            {/* Github button */}
                            <a href={proj.githubUrl} target="_blank" className="flex gap-2 justify-center items-center border border-gray-700 rounded-lg py-2 px-4 text-md font-normal font-google-sans-code shadow-2xl cursor-pointer hover:scale-102 hover:bg-gray-900 hover:text-white backdrop-blur-md transition-all duration-100">
                                <div>
                                    <GithubIcon />
                                </div>
                                <div>Source Code</div>
                            </a>

                        </div>
                    </div>
                    <div>
                        <div className="relative h-full">
                            {proj.banner?.type === "image" ? (
                                <div className="absolute right-0 -top-30 min-w-130 min-h-40">

                                    <div className="flex justify-start items-end gap-3 max-w-125">
                                        {proj.banner.screens?.map((screen) => (
                                            <div
                                                key={screen.name}
                                                className={`relative w-38 h-82 overflow-hidden rounded-t-lg ${screen.pos === "left"
                                                    ? "-rotate-4 translate-y-46 group-hover:-rotate-7 group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                    : screen.pos === "right"
                                                        ? "rotate-7 translate-y-46 group-hover:rotate-9 group-hover:translate-y-42 group-hover:scale-102 transition-all duration-400"
                                                        : "rotate-0 translate-y-38 group-hover:translate-y-34 group-hover:scale-102 transition-all duration-400"
                                                    }`}
                                            >
                                                <Image
                                                    src={screen.src}
                                                    alt={screen.name}
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
                                <div className="absolute -bottom-20 left-16 w-95 h-77 overflow-hidden rounded-t-xl -rotate-2 group-hover:-rotate-4 group-hover:-bottom-18 group-hover:scale-102 transition-all duration-500">
                                    <video
                                        src={proj.banner?.video}
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

export default ProjectCard