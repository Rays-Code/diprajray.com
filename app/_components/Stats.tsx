import Image from "next/image";

const Stats = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-16 pt-10 text-base font-space-grotesk text-theme-gray">

            {/* Projects */}
            <div className="flex flex-col items-center justify-center gap-1">
                <div>
                    <Image src="/ui/suitcase.png" width={35} height={35} alt="projects icon" />
                </div>
                <div>
                    <span>20+ Projects Delivered</span>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="h-[40px] w-[0.4px] bg-theme-gray opacity-30"></div>

            {/* Clients */}
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="pt-2">
                    <Image src="/ui/handshake.png" width={28} height={28} alt="handshake icon" />
                </div>
                <div>
                    <span>10+ clients across sectors</span>
                </div>
            </div>

             {/* Horizontal line */}
            <div className="h-[40px] w-[0.4px] bg-theme-gray opacity-30"></div>

            {/* Experience */}
            <div className="flex flex-col items-center justify-center">
                <div>
                    <Image src="/ui/verified.png" width={30} height={30} alt="verified icon" />
                </div>
                <div>
                    <span>2+ years of experience</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats