"use client";

import { useEffect, useState } from "react";

export function getIndianTime(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace(/\u202f/g, " ");
}

export default function IndianClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(getIndianTime());
    const id = setInterval(() => setTime(getIndianTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return <div>{time}</div>;
}