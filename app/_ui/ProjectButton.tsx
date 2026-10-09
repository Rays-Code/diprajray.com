import Image from "next/image";


interface ProjectButton {
    label: string,
    action: string
}

const ProjectButton = ({ label, action }: ProjectButton) => {
    return <a href={action} className="flex gap-2 justify-center items-center text-base bg-theme-blue rounded-full pt-2 pb-1 px-8 font-istok-web font-semibold shadow-2xl cursor-pointer hover:scale-102 backdrop-blur-md transition-all duration-300 group">
        <span>{label}</span>
        <span>
            <Image src="/ui/up-right-arrow.svg" width={10} height={10} alt="up right arrow" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-all duration-200"/>
        </span>
    </a>
}

export default ProjectButton;