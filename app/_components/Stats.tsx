import Image from "next/image";
import stats from "../_data/stats";

const Stats = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-16 pt-10 text-base font-space-grotesk text-theme-gray">

              {stats.map((stat, idx) => {
                  return <div key={idx} className="flex justify-center items-center gap-16">
                      <div className="flex flex-col items-center justify-center gap-1">
                          <div>
                              <Image src={stat.src} width={stat.width} height={stat.height} alt={stat.alt} />
                          </div>
                          <div className={`${stat.alt === "handshake icon"? "pt-1": "pt-0"}`}>
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