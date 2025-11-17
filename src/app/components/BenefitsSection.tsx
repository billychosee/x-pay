"use client";

import { motion } from "framer-motion";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaUserCheck,
  FaMobileAlt,
} from "react-icons/fa";

const benefitsOfXpayItems = [
  {
    title: "Increased Convenience and Choice",
    description: "A wider range of secure payment options",
    icon: FaHandshake,
  },
  {
    title: "Expanded Market Reach",
    description: "Attract more customers with multiple payment methods",
    icon: FaGlobeAmericas,
  },
  {
    title: "Customers",
    description:
      "Access products on convenient debit order plans and build credit history",
    icon: FaUserCheck,
  },
  {
    title: "Faster Mobile and Web Checkout Process",
    description: "Quick and easy checkouts reduce cart abandonment rates",
    icon: FaMobileAlt,
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative py-20 overflow-hidden bg-gray-50"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Large blurred circles */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-[#FFC300]/20 top-10 left-10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-xl bg-[#333333]/20 to-[#CC9900]/20 top-1/3 right-10 blur-2xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-[#FFC300]/15 to-[#CC9900]/15 bottom-10 left-1/4 blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        />

        {/* Floating payment icons */}
        {benefitsOfXpayItems.map((_, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center w-12 h-12 text-white"
            animate={{
              x: [Math.random() * 500 - 250, Math.random() * 500 - 250],
              y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + Math.random() * 15,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <FaHandshake className="w-6 h-6 text-[#FFC300]/60" />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center max-w-7xl">
        {/* Heading */}
        <p className="text-sm font-semibold tracking-widest text-[#CC9900] uppercase">
          Benefits of X Pay
        </p>
        <h3 className="mt-2 text-3xl font-extrabold text-black sm:text-4xl">
          Why Our Customers Love X Pay
        </h3>
        <p className="max-w-2xl mx-auto mt-4 text-gray-700 sm:text-lg">
          Discover how X Pay simplifies payments, expands market reach, and
          empowers businesses to grow seamlessly.
        </p>

        {/* Benefit cards */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsOfXpayItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center p-6 text-center transition bg-white border border-gray-200 shadow-lg rounded-2xl hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#CC9900]/20 rounded-full">
                <item.icon className="w-7 h-7 text-[#FFC300]" />
              </div>
              <h4 className="text-lg font-semibold text-black">{item.title}</h4>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
