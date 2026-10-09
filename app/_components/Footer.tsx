"use client";

import Image from "next/image";
import Link from "next/link"
import footerData from "../_data/footer";

const navigationOptions = [
  {
    name: "Home",
    href: "#"
  },
  {
    name: "Work",
    href: "#"
  },
  {
    name: "Resume",
    href: "#"
  },
  {
    name: "Projects",
    href: "#"
  },
  {
    name: "Contact",
    href: "#"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    img: "/dev-icons/linkedin.svg",
    href: "#"
  },
  {
    name: "GitHub",
    img: "/dev-icons/github.svg",
    href: "#"
  },
  {
    name: "X",
    img: "/dev-icons/x.svg",
    href: "#"
  },
  {
    name: "Email",
    img: "/dev-icons/email.svg",
    href: "#"
  }
]

const Footer = () => {

  return (
    <div className="w-full pt-36 font-hanken-grotesk text-zinc-400">
      <div className="flex flex-col justify-center items-center bg-[#09090B] w-full min-h-70">

        {/* Navigate + connect */}
        <div className="flex justify-between min-w-175">
          <div>
            <div className="text-sm font-semibold">{footerData?.navigate?.heading}</div>
            <div className="grid grid-cols-5 gap-4 pt-4 text-gray-500">
              {footerData?.navigate?.options?.map((nav, idx) => {
                return <a key={idx} href={nav.href} onClick={(e) => {
                  if (nav.name === "Resume") {
                    e.preventDefault();

                    window.open(nav.href, "_blank");

                    const link = document.createElement("a");
                    link.href = nav.href;
                    link.download = "Dipraj-Ray-Resume.pdf";
                    link.click();
                  }
                }}>{nav.name}</a>
              })}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">{footerData?.connect?.heading}</div>
            <div className="grid grid-cols-5 gap-3 pt-4">
              {footerData?.connect?.options?.map((social, idx) => {
                return <a target={`${social.name !== "Email"? "_blank": ""}`} key={idx} href={`${social.name === "Email"? `mailto:${social?.email}`: `${social?.href}`}`} className="border border-gray-400/20 bg-[#030304] rounded-md p-[2px] flex justify-center items-center">
                  <Image src={social.img} width={32} height={32} alt={social.name} />
                </a>
              })}
            </div>
          </div>
        </div>

        <div className="pt-14">
          {/* Horizontal line */}
          <div className="h-[0.08px] w-[700px] bg-theme-gray opacity-16"></div>

          {/* Copywright */}
          <div className="pt-6">
            <div className="text-gray-500">{footerData?.copywright?.text}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer