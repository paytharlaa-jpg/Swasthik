import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center pt-24">
      <div className="wrap">
        <p className="eyebrow text-saffron">Error 404</p>
        <h1 className="display mt-4 text-[16.8vw] md:text-[10.8vw] leading-[0.8]">
          Lost<span className="text-lime">?</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-bone/70">This page has moved or never existed. Let&apos;s get you back on track.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-saffron">
            Back home <ArrowUpRight size={18} />
          </Link>
          <Link href="/treatments" className="btn btn-ghost">
            Conditions we treat
          </Link>
        </div>
      </div>
    </main>
  );
}
