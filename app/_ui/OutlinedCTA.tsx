import Image from "next/image";


interface OutlinedCTA {
    label: string,
    action: string
}

const OutlinedCTA = ({ label, action }: OutlinedCTA) => {
    return <a href={action} className="flex gap-2 justify-center items-center text-base border-1 border-white rounded-full pt-2 pb-1 px-8 font-istok-web font-semibold shadow-2xl cursor-pointer hover:scale-102 backdrop-blur-md hover:bg-gray-900 transition-all animate-300">
        <span>{label}</span>
        <span className="animate-bounce-arrow">
            <Image src="/ui/downward-arrow.svg" width={8} height={8} alt="downward arrow" />
        </span>
    </a>
}

export default OutlinedCTA;