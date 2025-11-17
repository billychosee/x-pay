"use client";

import { motion } from "framer-motion";
import { FaCreditCard, FaDollarSign } from "react-icons/fa";
import Link from "next/link";

type FeatureItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function FeaturesSection({ keyFeaturesItems }: { keyFeaturesItems: FeatureItem[] }) {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Animated purple background elements - enhanced visibility and cohesion with cards */}
      <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        {/* Large abstract blurred circles with stronger glow and pulse */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-[#FFC300]/70 top-12 left-12 blur-3xl shadow-[0_0_60px_20px_rgba(255,195,0,0.65)]"
          animate={{ x: [0, 80, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-xl bg-[#CC9900]/50 top-1/3 right-12 blur-2xl shadow-[0_0_40px_14px_rgba(204,153,0,0.6)]"
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-[#FFC300]/40 bottom-8 left-1/4 blur-2xl shadow-[0_0_60px_20px_rgba(255,195,0,0.5)]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 34, ease: "easeInOut" }}
        />

        {/* Floating decorative elements (slightly brighter & larger) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center text-white w-14 h-14"
            aria-label={i % 2 === 0 ? "purple card icon" : "dollar icon"}
            style={{
              filter: "drop-shadow(0 6px 14px rgba(255,195,0,0.8))",
            }}
            animate={{
              x: [Math.random() * 600 - 300, Math.random() * 600 - 300],
              y: [Math.random() * 350 - 175, Math.random() * 350 - 175],
              rotate: [0, 360],
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 16 + Math.random() * 14,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {i % 2 === 0 ? (
              <FaCreditCard className="w-7 h-7 text-[#CC9900]" />
            ) : (
              <FaDollarSign className="w-7 h-7 text-[#FFC300]" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center max-w-7xl">
        <h3 className="text-3xl font-extrabold text-[#CC9900]">Key Features</h3>

        {/* Cards: semi-transparent with purple tint and glow that ties to BG */}
        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeaturesItems.map((item, i) => (
            <div
              key={i}
              className="relative p-8 overflow-hidden transition rounded-2xl group hover:-translate-y-1 hover:shadow-xl"
              style={{
                // Semi-transparent white with gold tint
                background: "linear-gradient(to bottom right, rgba(255,255,255,0.88), rgba(255,195,0,0.1))",
                border: "1px solid rgba(255,195,0,0.25)", // subtle gold border
              }}
            >
              {/* soft purple halo behind content to tie to bg animation */}
              <span
                aria-hidden="true"
                className="absolute -inset-1 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at 20% 20%, rgba(255,195,0,0.25), rgba(0,0,0,0) 40%)",
                  filter: "blur(8px)",
                  transform: "translateZ(0)",
                }}
              />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                  <item.icon className="h-8 w-8 text-[#CC9900]" />
                </div>
                <h4 className="text-lg font-semibold text-[#CC9900]">{item.title}</h4>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
              {/* decorative outline that echoes purple theme */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#CC9900]/10 blur-2xl" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/features"
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-[#CC9900] ring-1 ring-[#CC9900] transition hover:bg-[#FFC300] hover:text-[#333333]"
          >
            See All
          </Link>
        </div>
      </div>
    </section>
  );
}