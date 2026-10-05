import Image from "next/image"
import { useState } from "react";

interface Organisation {
    logo: {
        name: string,
        src: string
    },
    name: string,
    designation?: {
        text: string,
        colour: string
    },
    current?: boolean,
    degree?: string,
    location: string,
    duration: string,
    description?: string[]
    classes?: string[],
    type: string
}

const ExperienceCard = ({ org }: { org: Organisation }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex justify-start items-center gap-12 w-[1000px] py-3 pl-6 rounded-lg bg-[#18181B] backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-600`}>

            {/* LEFT SIDE */}
            <div className="relative h-35 w-35 rounded-full overflow-hidden">
                {org?.logo && <Image src={org?.logo?.src} fill alt={org?.logo?.name} className="object-cover" />}
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[730px] font-satoshi text-[#EDEDED] pt-6">
                <div className={`flex items-center gap-3 font-bold ${org?.type === "education" ? "font-google-sans-code text-2xl" : "font-satoshi text-4xl"}`}>
                    <span>{org?.name}</span>
                    {org?.current && <div className="relative bg-green-950 w-20 h-5 rounded-md flex items-center gap-2 px-2">
                        <div className="bg-theme-green w-2 h-2 rounded-full animate-pulse [animation-duration:2s] shrink-0"></div>
                        <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#4CFF3B] blur-sm animate-pulse" />
                        <span className="text-xs">Working</span>
                    </div>}
                </div>
                <div className={`text-xl font-google-sans-code ${org?.designation?.colour}`}>{org?.designation?.text}</div>
                <div className="text-base text-gray-300">{org?.degree}</div>
                <div className="text-base text-gray-300">{org?.location}</div>
                <div className="text-base text-gray-300">{org?.duration}</div>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <div></div>
                    <div className="flex items-center justify-center gap-3 cursor-pointer pb-2">
                        <span>
                            <Image src={isOpen ? "/ui/up-arrow.png" : "/ui/down-arrow.png"} width={12} height={12} alt="down arrow" />
                        </span>
                        <span className="text-base font-light">{isOpen ? "Hide Details" : "View Details"}</span>
                    </div>
                </div>

                <div className={`bg-[#27272A] transition-[max-height,padding] duration-700 ease-in-out
                    ${isOpen ? "max-h-[500px] p-6" : "max-h-0 p-0"} min-w-[550px] rounded-md transition-all duration-700 ease-in-out`}>
                    <div className={`transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}>
                        {org?.description?.map((line, idx) => {
                            return <div key={idx} className="flex gap-3 items-start">
                                <span className="w-[5px] h-[5px] bg-white rounded-full shrink-0 mt-[10px]"></span>
                                <span className="font-thin">{line}</span>
                            </div>
                        })}

                        <div>
                            {org?.classes && <div className="font-semibold text-lg pb-2 pl-3">Classes</div>}
                        </div>
                        {org?.classes?.map((line, idx) => {
                            return <div key={idx} className="flex gap-3 items-start">
                                <span className="w-[5px] h-[5px] bg-white rounded-full shrink-0 mt-[10px]"></span>
                                <span className="font-thin">{line}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExperienceCard