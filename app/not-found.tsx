import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center gap-6 px-6 py-24 text-center font-inter">
      {/* Blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E37FE]/25 blur-[140px]" />

      {/* Status pill */}
      <div className="relative flex items-center gap-2 rounded-full border border-white/15 bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        Error 404
        <span className="h-3 w-px bg-white/20" />
        <span className="text-white/60 normal-case">Page not found</span>
      </div>

      {/* Big 404 */}
      <p className="relative select-none text-[clamp(120px,22vw,240px)] font-semibold leading-none tracking-tight bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent">
        404
      </p>

      {/* Headline */}
      <h1 className="relative text-3xl font-semibold text-white md:text-5xl">
        Looks like you took a{" "}
        <span className="relative inline-block pt-4 lg:pt-0">
          <span className="inline-block rounded-full bg-[#2E37FE] px-5 py-1 font-cormorant-upright italic font-medium">
            Wrong turn
          </span>
        </span>
      </h1>

      <p className="relative max-w-[480px] text-base text-white/60">
        The page you are looking for does not exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      {/* Buttons */}
      <div className="relative mt-2 flex flex-wrap items-center justify-center gap-4">
        <Link href="/">
          <button className="rounded-full bg-[#2E37FE] px-8 py-3 font-semibold text-white transition-transform hover:scale-[1.02] cursor-pointer">
            Back to Home ↗
          </button>
        </Link>
        <Link href="/#work">
          <button className="rounded-full border border-white/30 bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer">
            View My Work ↓
          </button>
        </Link>
      </div>

      {/* Quick links */}
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
        {["Work", "Resume", "Projects", "Contact"].map((label) => (
          <Link
            key={label}
            href={`/#${label.toLowerCase()}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 transition-colors hover:border-white/30 hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}