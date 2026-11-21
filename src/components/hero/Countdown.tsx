"use client";

import { useEffect, useState } from "react";
import { getCountdown, type CountdownParts } from "@/config/countdown";

/** Ticks once per second. `null` until mounted so server and client HTML match. */
export function useCountdown() {
  const [parts, setParts] = useState<CountdownParts | null>(null);
  useEffect(() => {
    const update = () => setParts(getCountdown(Date.now()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);
  return parts;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/** One digit that rolls vertically to its next value. */
function RollDigit({ d }: { d: number }) {
  return (
    <span className="digit" aria-hidden>
      <span className="digit__col" style={{ transform: `translateY(-${d * 10}%)` }}>
        {DIGITS.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </span>
  );
}

export function RollNumber({ value, pad = 2 }: { value: number | null; pad?: number }) {
  const str = value === null ? "0".repeat(pad) : String(value).padStart(pad, "0");
  return (
    <span className="inline-flex tabular-nums">
      {str.split("").map((c, i) => (
        <RollDigit key={`${str.length}-${i}`} d={Number(c)} />
      ))}
    </span>
  );
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export function CountdownStrip({ parts, className = "" }: { parts: CountdownParts | null; className?: string }) {
  const label = parts
    ? `${parts.days} days, ${parts.hours} hours, ${parts.minutes} minutes and ${parts.seconds} seconds until New Year 2027`
    : "Countdown to New Year 2027";
  return (
    <div className={`grid grid-cols-4 ${className}`} role="timer" aria-label={label}>
      {UNITS.map((u, i) => (
        <div
          key={u.key}
          className={`flex flex-col gap-2 py-3 md:py-4 ${i > 0 ? "border-l hairline pl-3 md:pl-6" : ""}`}
        >
          <span className="display text-[10vw] sm:text-[7vw] md:text-[4.2vw] lg:text-[3.4vw] leading-none text-bone">
            <RollNumber value={parts ? parts[u.key] : null} pad={u.key === "days" ? 2 : 2} />
          </span>
          <span className="eyebrow text-ash">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
