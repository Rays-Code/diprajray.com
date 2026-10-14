

export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center gap-8 px-6 text-center font-inter">
      {/* Blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#2E37FE]/25 blur-[120px]" />

      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#2E37FE]" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#2E37FE]" />
      </div>

      {/* Text */}
      <p className="relative text-2xl font-semibold text-white md:text-3xl">
        <span className="inline-block rounded-full bg-[#2E37FE] px-5 py-1 font-serif italic font-medium">
          Loading...
        </span>
        <span className="ml-1 inline-flex gap-1 align-middle">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
        </span>
      </p>

      <p className="relative text-sm text-white/50">
        Getting things ready for you
      </p>
    </div>
  );
}