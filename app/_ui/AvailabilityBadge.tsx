
interface AvailabilityBadge {
    label: string
}

const AvailabilityBadge = ({label}: AvailabilityBadge) => {
  return (
    <div className="flex items-center gap-4 text-[10px] font-semibold font-inter border-[0.2px] border-white py-[6px] px-8 rounded-full">
        <div className="relative">
            <div className="bg-theme-green w-2 h-2 rounded-full animate-pulse [animation-duration:2s]"></div>
            <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#4CFF3B] blur-sm animate-pulse" />
        </div>
        <div className="uppercase">{label}</div>
    </div>
  )
}

export default AvailabilityBadge