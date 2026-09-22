import Image from "next/image";
import Avatar from "./Avatar";
import { TestimonialProps } from "../_types/testimonialCard";


const TestimonialCard = ({
    avatar,
    description,
    rating,
    name,
    designation,
    company,
    companyLogo,
    isTop = false,
    showContent = false,
}: TestimonialProps) => {
    return (
        <div
            className={`
                relative
                w-[295px] h-[210px]
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                ${isTop ? "backdrop-blur-2xl" : ""}
            `}
        >
            {showContent && (
                <>
                    <Avatar
                        src={avatar}
                        avatarName="demo avatar"
                    />

                    <div className="flex flex-col items-center">

                        <div className="pt-5">
                            <p className="text-center text-[11px] font-light font-inter leading-[1.4]">
                                {description}
                            </p>
                        </div>

                        <div className="flex items-center pt-2">
                            {Array.from({ length: Math.round(rating) }).map((_, idx) => (
                                <Image
                                    key={idx}
                                    src="/ui/star.svg"
                                    width={20}
                                    height={20}
                                    alt="rating star"
                                />
                            ))}
                        </div>

                        <div className="pt-5">
                            <p className="font-bold font-poppins text-[10px]">
                                {name}
                            </p>
                        </div>

                        <div className="flex items-center font-space-grotesk">
                            <p className="text-[10px] font-light">
                                {designation},
                            </p>

                            <Image
                                src={companyLogo}
                                width={20}
                                height={20}
                                alt={`${company}'s Logo`}
                            />

                            <p className="text-[10px] font-semibold">
                                {company}
                            </p>
                        </div>

                    </div>
                </>
            )}
        </div>
    );
};

export default TestimonialCard;