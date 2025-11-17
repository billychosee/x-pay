"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCog, FaDollarSign, FaLock, FaExclamationCircle, FaCreditCard, FaBriefcase, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Type for items
type Item = {
  title: string;
  description: string;
  icon: any;
};

// Your items
const whyChooseUsItems: Item[] = [
  { title: "Seamless Integrations", description: "Provides seamless integration with e-commerce platforms, mobile apps, and other systems through comprehensive APIs and plugins.", icon: FaCog },
  { title: "Affordable", description: "Enjoy favorable customized rates, transact from just $1, save more with our competitive pricing, and watch your profits grow with every transaction.", icon: FaDollarSign },
  { title: "Security", description: "Utilizes International and advanced PCI standard encryption protocols to protect sensitive data during transactions.", icon: FaLock },
  { title: "Fraud Detection", description: "Implements robust fraud detection and prevention mechanisms to safeguard against fraudulent activities.", icon: FaExclamationCircle },
  { title: "Multiple Payment Methods", description: "Supports a wide range of payment options such as credit/debit cards, digital wallets, and local payment methods.", icon: FaCreditCard },
  { title: "No 'system down' frustrations", description: "SMATPAY is built for scalability and uptime, ensuring that customers can always complete their purchases.", icon: FaBriefcase },
];

interface CarouselProps {
  interval?: number; // ms
}

export default function WhyChooseCarousel({ interval = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto rotate
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % whyChooseUsItems.length);
    }, interval);
    return () => clearInterval(timer);
  }, [paused, interval]);

  const visible = [
    whyChooseUsItems[(index - 1 + whyChooseUsItems.length) % whyChooseUsItems.length],
    whyChooseUsItems[index],
    whyChooseUsItems[(index + 1) % whyChooseUsItems.length],
  ];

  const handlePrev = () => setIndex((prev) => (prev - 1 + whyChooseUsItems.length) % whyChooseUsItems.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % whyChooseUsItems.length);

  return (
    <div
  className="relative flex flex-wrap items-center justify-center gap-6 px-4 mt-12 sm:px-0"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  {visible.map((item, i) => {
    const isCenter = i === 1;
    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isCenter ? 1 : 0.6, scale: isCenter ? 1.05 : 0.9 }}
        transition={{ duration: 0.6 }}
        className={`
          relative p-6 w-full max-w-[280px] sm:max-w-[320px] rounded-2xl shadow-lg
          border border-white/20 bg-white/30 backdrop-blur-lg
          ${isCenter ? "z-10" : "z-0"}
        `}
      >
        <div className="flex items-center justify-center mx-auto mb-4 rounded-full shadow-inner w-14 h-14 bg-white/40">
          <item.icon className="w-7 h-7 text-[#2f1991]" />
        </div>
        <h4 className="text-lg font-semibold text-[#1a133d]">{item.title}</h4>
        <p className="mt-2 text-sm text-gray-700">{item.description}</p>
      </motion.div>
    );
  })}

  {/* Previous / Next buttons */}
  <button
    onClick={handlePrev}
    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white rounded-full bg-[#2f1991]/70 hover:bg-[#8141D5]/80 shadow-lg z-20 sm:left-0"
  >
    <FaChevronLeft />
  </button>
  <button
    onClick={handleNext}
    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white rounded-full bg-[#2f1991]/70 hover:bg-[#8141D5]/80 shadow-lg z-20 sm:right-0"
  >
    <FaChevronRight />
  </button>

  {/* Gradient glassy background */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(129,65,213,0.15),transparent_70%)]" />
</div>

  );
}
