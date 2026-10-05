import Image from "next/image"
import IndianClock from "../_utils/getTime"

interface AvailabilityBadge {
  label: string,
  country: string,
  src: string,
  alt: string
}

const AvailabilityBadge = ({ label, country, src, alt }: AvailabilityBadge) => {
  return (
    <div className="flex items-center gap-4 text-[10px] font-semibold font-inter border-[0.1px] border-white py-[6px] px-3 rounded-full mb-4">

      {/* Green pulse */}
      <div className="relative">
        <div className="bg-theme-green w-2 h-2 rounded-full animate-pulse [animation-duration:2s]"></div>
        <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#4CFF3B] blur-sm animate-pulse" />
      </div>

      {/* Availability, location & time */}
      <div className="flex items-center gap-3">
        <div className="uppercase">{label}</div>

        <div className="h-[15px] w-[0.4px] bg-theme-gray opacity-30"></div>

        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-1">
              <div>
                <Image className="rounded-xs" src={src} width={14} height={14} alt={alt} />
              </div>
              <div>{country}</div>
            </div>
            <div className="bg-theme-gray w-[3px] h-[3px] rounded-full"></div>
          </div>

          {/* Signal waves  */}
          <div className="flex justify-center items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="240 130 800 940"
                width={10}
                height={15}
              >

                <path
                  className="w d1"
                  fill="#73f542"
                  d="M283 545 Q283 512 312 514 C355 525 386 570 386 611 C386 655 355 700 312 708 Q283 710 283 675 Z"
                />

                <g fill="none" stroke="#73f542" strokeLinecap="round">
                  <path className="w d2" strokeWidth={88} d="M462 480 A173 173 0 0 1 462 742" />
                  <path className="w d3" strokeWidth={100} d="M603 362 A321 321 0 0 1 603 858" />
                  <path className="w d4" strokeWidth={106} d="M788 205 A544 544 0 0 1 785 995" />
                </g>
              </svg>
            </div>
            <div>
              <IndianClock />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AvailabilityBadge