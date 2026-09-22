import Image from "next/image"


const Avatar = ({ src, avatarName }: { src: string, avatarName: string }) => {
    return (
        <div className="absolute right-30 top-[-10%] w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-theme-green shadow-lg">
            <Image
                src={src}
                fill
                alt={avatarName}
                unoptimized
                className="object-cover"
            />
        </div>
    )
}

export default Avatar