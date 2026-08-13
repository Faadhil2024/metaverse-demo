"use client";
import HowItWorks from "@/components/home/HowItWorks";
import { Geist } from "next/font/google";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
});

export default function NewHero() {
  return (
    <>
      <div
        className={`relative h-screen w-full overflow-hidden bg-black ${geist.variable} font-[family-name:var(--font-geist)]`}
      >
        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute h-full w-full object-cover object-[70%_center]"
        />

        {/* Navbar — swapped for the real site Nav, transparent variant */}
        <Nav transparent />

        {/* Hero content */}
        <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-24 sm:pb-12 md:px-12 md:pb-16 lg:px-16">
          <div className="max-w-3xl">
            <span
              className="mb-4 block text-xs text-white/90 sm:mb-6 sm:text-sm"
              style={{
                animation: "fadeSlideUp 0.8s ease 0.2s both",
              }}
            ></span>

            <h1
              className="text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                animation: "fadeSlideUp 0.8s ease 0.4s both",
              }}
            >
              Shaping visual
              <br />
              narratives,
              <br />
              one pixel at a time.
            </h1>
          </div>

          <div>
            <p
              className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg"
              style={{
                animation: "fadeSlideUp 0.8s ease 0.7s both",
              }}
            >
              Turning vision into reality through craft, motion, and an
              endless pursuit of beauty.
            </p>

            <Link
  href="/explore"
  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
  style={{ animation: "fadeSlideUp 0.8s ease 0.9s both" }}
>
  Explore Work
  <ArrowRight size={16} />
</Link>
          </div>
        </div>
      </div>

      <HowItWorks />
    </>
  );
}