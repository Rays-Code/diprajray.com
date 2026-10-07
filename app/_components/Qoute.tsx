import Image from "next/image"


const Qoute = () => {
  return (
    <div className="flex justify-center w-full pt-44 px-200">
      <div className="relative border-3 border-[#2D2D2D]/30 min-w-full h-30 rounded-xl px-12 pt-12 pb-22">

      {/* Quotation mark */}
      <div className="absolute -left-6 top-0 z-0 opacity-35">
        <Image src="/ui/quotation-mark.svg" width={250} height={250} alt="Quotation mark" />
      </div>

      {/* Qoute */}
      <div className="relative flex justify-start z-1">
        <div className="font-geist-mono text-xl font-semibold text-[#C1C1C1] italic shadow-xl">"Arise, awake, and stop not till the goal is reached."</div>
      </div>

      {/* Author */}
      <div className="flex justify-end">
        <div className="font-geist-mono text-lg font-light text-[#999999] italic"> - Katha Upanishad</div>
      </div>
      </div>
    </div>
  )
}

export default Qoute