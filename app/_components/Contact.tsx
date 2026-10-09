"use client";

import Image from "next/image"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import contactData from "../_data/contact";


const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "topic">("idle");
  const [selectedTopic, setSelectedTopic] = useState("");

  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  const sendEmail = async (e: React.SubmitEvent<HTMLFormElement>) => {

    e.preventDefault();

    if(!selectedTopic){
      setStatus("topic");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    };

    if(!form.current?.checkValidity()){
      form.current?.reportValidity();
      return;
    }

    if(!form.current || status === "sending") return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      form.current.reset();
      setSelectedTopic("")
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData?.left?.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch(err) {
      console.error("Failed to copy email: ", contactData?.left?.email);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center pt-44">

      {/* LEFT SECTION */}
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex gap-2 font-hanken-grotesk text-[#9196FF] font-medium text-base items-center">
             <span className="w-10 h-[2px] bg-[#9196FF]"></span>
              <span>{contactData?.label}</span>
             <span className="w-10 h-[2px] bg-[#9196FF]"></span>
          </div>
          <div className="font-space-grotesk font-bold text-5xl">
            <span className="text-[#C1C1C1]">{contactData?.heading?.highlighted}</span>
            <span> {contactData?.heading?.base}</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-140 font-hanken-grotesk text-lg font-regular">
          <span>{contactData?.desc?.line1}</span>
          <span>{contactData?.desc?.line2}</span>
        </div>
      </div>

      {/* LEFT SECTION */}
      <div className="flex justify-between gap-25 pt-14">
        <div className="relative flex flex-col">
          <div className="text-[#9196FF] text-lg font-medium font-hanken-grotesk">{contactData?.left?.label}</div>
          <div className="font-space-grotesk text-6xl font-bold flex flex-col justify-center pt-2">
            <span>{contactData?.left?.heading?.line1}</span>
            <span>{contactData?.left?.heading?.line2?.base} <span className="bg-gradient-to-r from-[#969AFF] to-[#000CFF] bg-clip-text text-transparent">{contactData?.left?.heading?.line2?.highlighted}</span></span>
          </div>
          <div className="max-w-110 font-hanken-grotesk text-lg font-regular text-gray-300 pt-10">
            {contactData?.left?.desc}
          </div>
          <div className="flex items-center gap-3 pt-7">
            <a
              href={`mailto:${contactData?.left?.email}`}
              className="group flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9196FF]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#9196FF]/60 text-[#9196FF] transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#9196FF] group-hover:bg-[#9196FF] group-hover:text-black group-hover:shadow-[3px_3px_0_0_#fff]">
                <Mail size={20} strokeWidth={2.25} />
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="font-space-grotesk text-xs font-bold uppercase tracking-widest text-[#9196FF]">
                  Email
                </span>
                <span className="font-hanken-grotesk break-all text-lg text-white decoration-[#9196FF] decoration-2 underline-offset-4 group-hover:underline">
                  {contactData?.left?.email}
                </span>
              </div>
            </a>

            {/* Email copy */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-0 bottom-full mb-2 flex justify-center">
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      role="status"
                      initial={{ opacity: 0, y: 6, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="relative whitespace-nowrap rounded-md bg-[#9196FF] px-3 py-1.5 font-hanken-grotesk text-sm font-medium text-black"
                    >
                      Copied!
                      <span className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#9196FF]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="cursor-pointer rounded-md bg-[#2A2A2E] p-1.5 opacity-80 transition-all duration-200 hover:scale-105 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-[#9196FF]"
              >
                <Image src="/ui/copy.png" width={17} height={17} alt="" />
              </button>
            </div>
          </div>

        </div>

       {/* RIGHT SECTION */}
       <div className="border border-[#9196FF]/50 w-130 h-178 shadow-xl p-8">

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div>
              <Image src={contactData?.right?.heading?.icon?.src} width={60} height={60} alt={contactData?.right?.heading?.icon?.name} quality={100}/>
            </div>
            <div className="font-space-grotesk text-4xl font-bold">{contactData?.right?.heading?.text}</div>
          </div>
          <div className="font-hanken-grotesk font-regular text-sm">{contactData?.right?.desc}</div>
        </div>

        <div className="flex justify-center items-center pt-8">

          {/* Form section */}
            <form ref={form} onSubmit={sendEmail} noValidate className="grid grid-cols-2 gap-6">

               {/* Contact Options */}
               <div className="col-span-2 flex flex-col gap-6">
                <div>
                  <span className="inline-block -rotate-2 bg-[#9196FF] px-3 py-1 text-3xl font-black font-inter uppercase tracking-wide text-black text-xs shadow-[3px_3px_0_0_#fff]">
                    {contactData?.right?.form?.field1?.heading}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap gap-4">

                    <input name="topic" type="hidden" value={selectedTopic} />
                    {contactData?.right?.form?.field1?.contactOptions?.map((option, idx) => {
                      return <button key={idx} type="button" onClick={() => setSelectedTopic(option)} 
                      className={`relative px-4 py-2 border-2 border-[#9196FF]/30 uppercase font-inter text-xs cursor-pointer transition-all duration-300 
                        ${selectedTopic === option? "bg-[#D0D2FF] font-black text-black shadow-[3px_3px_0_0_#fff] border-r-2 border-b-3 border-black -rotate-1": "font-bold bg-transparent"}`}
                      >
                        {option}
                        {selectedTopic === option && <motion.span className="absolute border-1 bg-black border-white w-4 h-4 -top-1.5 -right-2 z-0 flex justify-center items-center"
                          layoutId="topic-indicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                          <span className="rounded-full w-2 h-2 bg-[#9196FF] animate-pulse shrink-0"></span>
                        </motion.span>}
                      </button>
                    })}
                  </div>
                </div>
               </div>

              {/* User */}
              <div className="h-14 flex flex-col gap-4 font-hanken-grotesk text-lg">
                <div>
                  <span className="inline-block -rotate-2 bg-[#9196FF] px-3 py-1 text-3xl font-black font-inter uppercase tracking-wide text-black text-xs shadow-[3px_3px_0_0_#fff]">
                    {contactData?.right?.form?.field2?.heading}
                  </span>
                </div>
                <input type="text" name="from_name" placeholder={contactData?.right?.form?.field2?.placeholder} required className="outline-none placeholder:text-[#696969] placeholder:font-black border-b-2 border-gray-300 pb-3 font-black text-[#9196FF]"/> 
              </div>

              {/* Email */}
              <div className="h-14 flex flex-col gap-4 font-hanken-grotesk text-lg">
                <div>
                  <span className="inline-block -rotate-2 bg-[#9196FF] px-3 py-1 text-3xl font-black font-inter uppercase tracking-wide text-black text-xs shadow-[3px_3px_0_0_#fff]">
                    {contactData?.right?.form?.field3?.heading}
                  </span>
                </div>
                <input type="email" name="from_email" placeholder={contactData?.right?.form?.field3?.placeholder} required className="outline-none placeholder:text-[#696969] placeholder:font-black border-b-2 border-gray-300 pb-3 font-black text-[#9196FF]"/> 
              </div>

              {/* Message */}
              <div className="col-span-2 h-35 w-full rounded-lg flex flex-col gap-4 font-hanken-grotesk pt-8 h-full">
                <div>
                  <span className="inline-block -rotate-2 bg-[#9196FF] px-3 py-1 text-3xl font-black font-inter uppercase tracking-wide text-black text-xs shadow-[3px_3px_0_0_#fff]">
                    {contactData?.right?.form?.field4?.heading}
                  </span>
                </div>
                <textarea name="from_message" className="w-full min-h-35 outline-none resize-none bg-transparent font-black text-lg placeholder:text-[#696969] placeholder:font-black border-3 border-gray-300/10 p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" placeholder={contactData?.right?.form?.field4?.placeholder} required/>
              </div>


              {/* Status messages */}
              <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[9999] flex justify-center px-4">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      role="status"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="pointer-events-auto relative flex w-full max-w-md items-start gap-3 border-2 border-[#9196FF] bg-[#D0D2FF] py-3 pl-4 pr-10 text-black shadow-[4px_4px_0_0_#9196FF]"
                    >
                      <span className="mt-0.5 text-lg leading-none text-[#4B52E0]">{contactData?.right?.statusMsgs?.success?.icon}</span>
                      <div>
                        <p className="font-space-grotesk text-sm font-black uppercase tracking-widest">
                          {contactData?.right?.statusMsgs?.success?.heading}
                        </p>
                        <p className="font-hanken-grotesk text-sm font-medium">
                          {contactData?.right?.statusMsgs?.success?.desc}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        aria-label="Dismiss message"
                        className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center text-black transition-all duration-200 hover:bg-[#9196FF] hover:text-black focus-visible:outline-2 focus-visible:outline-[#4B52E0]"
                      >
                        <X size={16} strokeWidth={3} />
                      </button>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error"
                      role="alert"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="pointer-events-auto relative flex w-full max-w-md items-start gap-3 border-2 border-[#9196FF] bg-[#D0D2FF] py-3 pl-4 pr-10 text-black shadow-[4px_4px_0_0_#9196FF]"
                    >
                      <span className="mt-0.5 text-lg font-black leading-none text-black">!</span>
                      <div>
                        <p className="font-space-grotesk text-sm font-black uppercase tracking-widest">
                          {contactData?.right?.statusMsgs?.error?.heading}
                        </p>
                        <p className="font-hanken-grotesk text-sm font-medium">
                          {contactData?.right?.statusMsgs?.error?.desc}{" "}
                          <a href={`mailto:${contactData?.right?.statusMsgs?.error?.email}`} className="font-bold underline underline-offset-2">
                            {contactData?.right?.statusMsgs?.error?.email}
                          </a>
                          .
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        aria-label="Dismiss message"
                        className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center text-black transition-all duration-200 hover:bg-[#FF6B7A] focus-visible:outline-2 focus-visible:outline-[#D6293E]"
                      >
                        <X size={16} strokeWidth={3} />
                      </button>
                    </motion.div>
                  )}

                  {status === "topic" && (
                    <motion.div
                      key="topic"
                      role="alert"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="pointer-events-auto relative flex w-full max-w-md items-start gap-3 border-2 border-white bg-[#9196FF] py-3 pl-4 pr-10 text-black shadow-[4px_4px_0_0_#fff]"
                    >
                      <span className="mt-0.5 text-lg font-black leading-none">↑</span>
                      <div>
                        <p className="font-space-grotesk text-sm font-black uppercase tracking-widest">
                          {contactData?.right?.statusMsgs?.topic?.heading}
                        </p>
                        <p className="font-hanken-grotesk text-sm font-medium">
                          {contactData?.right?.statusMsgs?.topic?.desc}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        aria-label="Dismiss message"
                        className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center text-black transition-all duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-white"
                      >
                        <X size={16} strokeWidth={3} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Submit */}
              <button type="submit" disabled={status === "sending"} className="col-span-2 bg-[#9196FF] shadow-[6px_6px_0_0_#262626] py-3 text-center flex gap-3 justify-center items-center hover:scale-102 transition-all duration-300 cursor-pointer group mt-1">
                <span className="font-hanken-grotesk font-black text-black text-xl italic">{status === "sending"? "SENDING...": contactData?.right?.form?.submitBtn?.text }</span>
                <Image src={contactData?.right?.form?.submitBtn?.icon?.src} width={28} height={28} alt={contactData?.right?.form?.submitBtn?.icon?.name} unoptimized className="opacity-70 group-hover:-translate-y-1 group-hover:translate-x-2 transition-all duration-200"/>
              </button>

            </form>
        </div>


        </div>
      </div>


    </div>
  )
}

export default Contact