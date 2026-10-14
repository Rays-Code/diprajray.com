import Image from "next/image"
import quoteData from "../_data/qoute"

const Qoute = () => {
  return (
    <div className="flex justify-center w-full pt-36 lg:pt-44 px-4 lg:px-0">
      <div className="relative border-3 border-[#2D2D2D]/30 min-w-70 lg:min-w-230 h-40 md:h-30 rounded-xl px-12 pt-8 md:pt-12 pb-22">

      {/* Quotation mark */}
      <div className="absolute -left-6 top-0 z-0 opacity-45 lg:opacity-55 w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] object-contain">
        <Image src="/ui/quotation-mark.svg" width={250} height={250} alt="Quotation mark" className=""/>
      </div>

      {/* Qoute */}
      <div className="relative flex justify-start z-1">
        <div className="font-geist-mono text-base lg:text-xl font-semibold text-[#C1C1C1] italic shadow-xl">"{quoteData?.quote}"</div>
      </div>

      {/* Author */}
      <div className="flex justify-end">
        <div className="font-geist-mono text-sm lg:text-lg font-light text-[#999999] italic"> - {quoteData?.author}</div>
      </div>
      </div>
    </div>
  )
}

export default Qoute