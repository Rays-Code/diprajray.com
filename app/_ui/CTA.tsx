import Link from "next/link";
import Image from "next/image";


interface CTA {
    label: string,
    action: string
}

const CTA = ({ label, action }: CTA) => {
    return <Link href={action} className="flex gap-2 justify-center items-center text-base bg-theme-blue rounded-full pt-2 pb-1 px-5  font-istok-web font-bold border-t-[0.25px] border-white shadow-2xl cursor-pointer hover:scale-102 backdrop-blur-md">
        <span>{label}</span>
        <span>
            <Image src="/ui/up-right-arrow.svg" width={10} height={10} alt="up right arrow" />
        </span>
    </Link>
}

export default CTA;