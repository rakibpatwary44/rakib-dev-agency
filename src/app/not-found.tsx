import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { GiCat, GiSparkles } from "react-icons/gi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-linear-to-br from-indigo-950 via-purple-950 to-fuchsia-950 px-6 py-16 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
      />

      <section className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="relative mb-8 flex h-52 w-52 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-2xl shadow-fuchsia-950/40 backdrop-blur-sm sm:h-60 sm:w-60">
          <div className="absolute inset-5 rounded-full border border-dashed border-white/25" />
          <GiSparkles className="absolute left-7 top-8 h-7 w-7 animate-pulse text-amber-300" />
          <GiSparkles className="absolute bottom-9 right-8 h-5 w-5 animate-pulse text-pink-200" />
          <div className="flex h-28 w-28 items-center justify-center rounded-4xl bg-linear-to-br from-pink-300 to-violet-300 text-purple-950 shadow-lg shadow-purple-950/30 sm:h-32 sm:w-32">
            <GiCat className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>
          <span className="absolute -bottom-2 rounded-full border border-white/20 bg-indigo-950 px-4 py-1 text-sm font-semibold tracking-widest text-pink-200">
            OOPS!
          </span>
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-pink-200">
          Lost in space
        </p>
        <h1 className="text-7xl font-black tracking-tight sm:text-8xl">404</h1>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          This page wandered off
        </h2>
        <p className="mt-4 max-w-md leading-7 text-purple-100/80">
          Our little space cat can&apos;t find the page you&apos;re looking for.
          Let&apos;s take you somewhere familiar.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-pink-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <BsArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </section>
    </main>
  );
}
