"use client";

import Image from "next/image";
import Link from "next/link"
import footerData from "../_data/footer";

const Footer = () => {

  return (
    <div className="w-full pt-36 font-hanken-grotesk text-zinc-300">
      <div className="flex flex-col justify-center items-center bg-[#09090B] w-full min-h-70">

        {/* Navigate + connect */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between min-w-auto gap-10 lg:gap-0 lg:min-w-175 pt-14 lg:pt-0">
          <div>
            <div className="text-sm font-semibold">{footerData?.navigate?.heading}</div>
            <div className="grid grid-cols-5 gap-4 pt-4 text-gray-400">
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
            <div className="grid grid-cols-7 lg:grid-cols-5 gap-3 pt-4">
              {footerData?.connect?.options?.map((social, idx) => {
                return <a
                  target={social.name !== "Email" ? "_blank" : ""}
                  key={idx}
                  href={social.name === "Email" ? `mailto:${social?.email}` : social?.href}
                  className="flex size-10 lg:size-11 shrink-0 items-center justify-center rounded-md border border-gray-400/25 bg-[#030304]"
                >
                  <Image
                    src={social.img}
                    width={32}
                    height={32}
                    alt={social.name}
                    className="size-7 lg:size-9 object-contain transition-all duration-200 hover:scale-105"
                  />
              </a>
              })}
            </div>
          </div>
        </div>

        <div className="pt-14 pb-12 lg:pb-0 w-full lg:w-auto px-4 lg:px-0">
          {/* Horizontal line */}
          <div className="h-[0.08px] w-auto lg:w-[700px] bg-theme-gray opacity-18"></div>

          {/* Copywright */}
          <div className="pt-6 text-center lg:text-start">
            <div className="text-gray-400">{footerData?.copywright?.text}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer