import Image from "next/image";
import stats from "../_data/stats";

const Stats = () => {
  return (
    <div>
        <div className="w-full flex justify-center items-center gap-6 lg:gap-16 pt-5 lg:pt-12 text-[10px] lg:text-base font-inter text-gray-400 px-4">

              {stats.map((stat, idx) => {
                  return <div key={idx} className="flex justify-center items-center gap-8 lg:gap-16">
                      <div className="flex flex-col items-center justify-center gap-1">
                          <div>
                              <Image src={stat.src} width={stat.width} height={stat.height} alt={stat.alt} className="opacity-80 lg:opacity-90"/>
                          </div>
                          <div className={`${stat.alt === "handshake icon"? "pt-1": "pt-0"} text-center`}>
                              <span>{stat.heading}</span>
                          </div>
                      </div>

                      {/* Horizontal line */}
                      {idx === (stats.length - 1)? "": <div className="h-[40px] w-[0.4px] bg-theme-gray opacity-30"></div>}
                  </div>
              })}
        </div>
    </div>
  )
}

export default Stats