"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import stats from "../_data/stats";

const CountUp = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });

    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>0</span>;
};

const Stats = () => {
  return (
    <div className="mx-auto w-full max-w-[90vw] border-t border-white/10 pt-6 lg:max-w-[700px] lg:border-0 lg:pt-8">
      <div className="grid grid-cols-3">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-2 px-2 text-center lg:gap-3 lg:px-6 ${
              idx > 0 ? "border-l border-white/10" : ""
            }`}
          >
            <div className="flex items-baseline justify-center font-space-grotesk text-3xl font-medium leading-none text-white lg:text-4xl">
              <CountUp to={stat.value} />
              <span className="text-theme-blue">{stat.suffix}</span>
            </div>

            <p className="font-inter text-xs leading-snug text-theme-gray lg:text-sm">
              <span className="lg:hidden">{stat.label}</span>
              <span className="hidden lg:inline">{stat.desktopLabel ?? stat.label}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;