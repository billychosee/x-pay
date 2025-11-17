"use client"; // This directive must be at the top of the file

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCreditCard,
  FaGlobe,
  FaSyncAlt,
  FaHandHoldingUsd,
  FaRegListAlt,
  FaLink,
  FaQrcode,
  FaCogs,
  FaSms,
  FaMoneyCheckAlt,
  FaHandshake,
  FaTimes,
} from "react-icons/fa";

// --- Type Definition ---
interface Feature {
  title: string;
  description: string;
  icon: any;
  image: string;
  longDescription: string;
}

// --- Static Data ---
const paymentLogos = [
  { name: "G Pay", logo: "/g-pay.png" },
  { name: "Payflex", logo: "/payflex.png" },
  { name: "Mastercard", logo: "/mastercard.png" },
  { name: "Visa", logo: "/visa.png" },
  { name: "Apple Pay", logo: "/apple-pay.png" },
  { name: "S Code", logo: "/s-code.png" },
  { name: "american express", logo: "/american-express.png" },
  { name: "mobi cred", logo: "/mobi-cred.png" },
  { name: "snap scan", logo: "/snap-scan.png" },
  { name: "zapper", logo: "/zapper.png" },
];

const coreFeatures: Feature[] = [
  {
    title: "Multi-Channel Payments",
    description:
      "Accept payments via debit/credit cards, EFT, QR codes, and more.",
    icon: FaCreditCard,
    image: "/multichannel-payments.jpg",
    longDescription:
      "X Pay empowers you to accept a wide range of payment methods, from traditional credit/debit cards to modern options like SnapScan, Ozow, and QR code payments. This flexibility ensures your customers can pay however they prefer, increasing your conversion rates.",
  },
  {
    title: "Recurring Billing",
    description: "Automate subscriptions and recurring payments with ease.",
    icon: FaSyncAlt,
    image: "/billing.jpg",
    longDescription:
      "Manage subscriptions effortlessly. Our recurring billing feature automates payments for services, memberships, and digital products, reducing churn and saving you time. Set up flexible billing cycles, send automated reminders, and provide a seamless experience for your subscribers.",
  },
  {
    title: "Secure Tokenization",
    description:
      "Store card details securely for one-click purchases and subscriptions.",
    icon: FaGlobe,
    image: "/secure-tokenization.jpg",
    longDescription:
      "Protect your customers and your business with advanced tokenization. Instead of storing sensitive card data, X Pay replaces it with a unique token. This enables secure one-click checkouts and subscriptions without compromising security or PCI compliance.",
  },
  {
    title: "Fiscalized Invoicing",
    description:
      "Stay compliant with automatic, SARS-ready invoice generation.",
    icon: FaRegListAlt,
    image: "/fiscalized-invoicing.jpg",
    longDescription:
      "Our fiscalized invoicing tool automatically generates SARS-compliant invoices for every transaction. This feature integrates seamlessly into your workflow, ensuring you remain compliant with South African tax regulations without manual effort.",
  },
  {
    title: "Dynamic Payment Links",
    description:
      "Generate and share secure links for one-off or bulk payments via SMS, email, or social media.",
    icon: FaLink,
    image: "/payment-links.jpg",
    longDescription:
      "Create and send secure payment links in seconds. This is perfect for invoicing, social commerce, or collecting one-off payments without a full e-commerce setup. Customers can pay with a single click from any device.",
  },
  {
    title: "Split Payments",
    description:
      "Automatically route a single payment to multiple bank accounts or vendors.",
    icon: FaMoneyCheckAlt,
    image: "/split-payments.jpg",
    longDescription:
      "Simplify complex payment flows with split payments. Automatically divide a single transaction among multiple recipients, such as vendors, partners, or different departments. This is ideal for marketplaces, franchises, and platforms that need to distribute funds efficiently.",
  },
  {
    title: "Real-time Refunds",
    description:
      "Process customer refunds and manage disputes directly from your dashboard.",
    icon: FaHandHoldingUsd,
    image: "/realtime-refunds.jpg",
    longDescription:
      "Handle refunds and disputes with speed and transparency. Our real-time refund feature allows you to process returns directly from your X Pay dashboard, improving customer satisfaction and streamlining your operations.",
  },
  {
    title: "Multicurrency Support",
    description:
      "Effortlessly accept and manage payments in multiple local and foreign currencies.",
    icon: FaHandshake,
    image: "/multicurrency-support.jpg",
    longDescription:
      "Expand your business globally with multicurrency support. X Pay allows you to accept and process payments in South African Rand, as well as various foreign currencies, providing a smooth and localized checkout experience for your international customers.",
  },
];

const products = [
  {
    title: "E-commerce & Web Integration",
    description:
      "Connect X Pay to your online store with our easy plugins and APIs for a seamless checkout experience.",
    image: "/ecommerce.jpg",
    features: [
      "WooCommerce & Shopify Plugins",
      "REST APIs & SDKs",
      "R-Code Integration",
    ],
  },
  {
    title: "Smart POS Terminals",
    description:
      "Accept in-person payments with our sleek, fiscalization-ready POS devices that support cards, mobile money, and QR codes.",
    image: "/xpay-pos.png",
    features: [
      "Accepts All Payment Methods",
      "Fiscalization Ready",
      "Real-Time Reporting",
    ],
  },
  {
    title: "Value-Added Services (VAS)",
    description:
      "Turn your business into a hub for essential services. Earn commissions by selling airtime, electricity tokens, and bill payments.",
    image: "/vas-services.jpg",
    features: [
      "Airtime & Data Top-ups",
      "Prepaid Electricity & Utility Payments",
      "Earn Commissions",
    ],
  },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const staggeredContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
} as const;

export default function FeaturesPage() {
  const [modalData, setModalData] = useState<Feature | null>(null);

  const openModal = (feature: Feature) => {
    setModalData(feature);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Head>
        <title>X Pay Features: Payments, Subscriptions & More</title>
        <meta
          name="description"
          content="Explore X Pay's powerful features, including multiple payment options, recurring billing, smart POS terminals, and developer tools to grow your business in Africa."
        />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center text-center overflow-hidden group">
          <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-in-out group-hover:scale-105">
            <Image
              src="/features-bg.jpg"
              alt="Features Background"
              fill
              className="object-cover"
              quality={100}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/60"></div>
          </div>
          <motion.div
            className="relative z-10 max-w-4xl px-4 text-white sm:px-6 lg:px-8"
            variants={staggeredContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeInUp}
              className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-4xl text-[#D4AF37]"
            >
              Powerful Features. Effortless Payments.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg font-light sm:text-xl md:text-base opacity-90"
            >
              Discover the full suite of tools that make X Pay the ultimate
              payment gateway for businesses in Africa.
            </motion.p>
          </motion.div>
        </div>

        {/* Payment Methods Marquee */}
        <section className="relative py-16 bg-white">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h2 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl mb-8">
              Accept All Major Payment Methods
            </h2>
            <div className="mt-10 overflow-hidden border border-gray-200 rounded-3xl bg-gradient-to-r from-black to-gray-800">
              <div className="flex animate-[marquee_30s_linear_infinite] gap-12 p-6 hover:[animation-play-state:paused]">
                {[...paymentLogos, ...paymentLogos].map((item, idx) => (
                  <motion.div
                    key={`${item.name}-${idx}`}
                    className="shrink-0"
                    whileHover={{ y: -6, scale: 1.05 }}
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={120}
                      height={60}
                      className="object-contain w-auto h-12"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <motion.section
          className="relative px-4 py-20 sm:px-6 lg:px-8"
          variants={staggeredContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="container mx-auto text-center max-w-7xl">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-12 md:text-4xl">
              Everything You Need to Get Paid
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center p-8 overflow-hidden text-center transition-transform duration-300 ease-in-out cursor-pointer rounded-2xl group hover:scale-105 hover:shadow-2xl"
                  onClick={() => openModal(feature)}
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div
                    className="absolute inset-0 z-0 opacity-50 transition-all duration-500 ease-in-out group-hover:scale-[1.5]"
                    style={{
                      background:
                        "radial-gradient(circle at center, #FFF9E6, #FFFDF7, #FFF9E6)",
                      animation: "bg-move 20s infinite alternate",
                    }}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 border bg-gradient-to-br from-black/5 to-[#D4AF37]/10 backdrop-filter backdrop-blur-sm rounded-2xl border-white/20">
                    <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-full">
                      <feature.icon className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(feature);
                      }}
                      className="mt-4 text-[#D4AF37] font-semibold flex items-center gap-2 hover:text-[#B8941F] transition-colors"
                    >
                      Learn More
                      <span className="text-sm transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Product Showcase */}
        {products.map((product, index) => (
          <motion.section
            key={index}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Fixed image container with aspect ratio */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    className="relative w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </motion.div>
                </div>

                <div className="text-center lg:w-1/2 lg:text-left">
                  <h2 className="text-3xl font-bold text-[#D4AF37] mb-4 md:text-4xl">
                    {product.title}
                  </h2>
                  <p className="mb-6 text-lg text-gray-600">
                    {product.description}
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center lg:justify-start"
                      >
                        <span className="mr-3 text-xl text-[#FFC300]">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us" className="inline-block mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFC300] text-[#333333] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#CC9900] transition-all"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* CTA Section - Glassmorphism style */}
        <section className="relative py-20 overflow-hidden bg-[#333333]">
          <div className="absolute inset-0 z-0">
            {/* Animated blurred circles */}
            <motion.div
              className="absolute w-64 h-64 bg-[#FFC300] rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: ["-20%", "100%"],
                y: ["-20%", "100%"],
                rotate: 360,
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ top: "10%", left: "10%" }}
            ></motion.div>
            <motion.div
              className="absolute rounded-full bg-gradient-to-br from-black to-gray-800 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: ["100%", "-20%"],
                y: ["100%", "-20%"],
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: 5,
              }}
              style={{ bottom: "10%", right: "10%" }}
            ></motion.div>
            <motion.div
              className="absolute bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70"
              animate={{ x: ["-50%", "50%"], y: ["50%", "-50%"], rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: 10,
              }}
              style={{ top: "40%", left: "40%" }}
            ></motion.div>
          </div>
          <div className="container relative z-10 px-4 mx-auto text-center sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              className="p-10 border shadow-2xl bg-white/10 backdrop-filter backdrop-blur-lg border-white/20 rounded-3xl md:p-16"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Simplify Your Payments?
              </h2>
              <p className="mb-8 text-lg text-white opacity-90">
                Join thousands of businesses already growing with X Pay.
              </p>
              <Link href="/contact-us" className="inline-block">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(212, 175, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all cursor-pointer hover:from-[#B8941F] hover:to-[#D4AF37]"
                >
                  Get Started Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Modal for Feature Details */}
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-md p-6 bg-white shadow-2xl rounded-3xl overflow-y-auto max-h-[90vh] mx-auto md:max-w-2xl lg:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute text-gray-400 top-4 right-4 hover:text-gray-600"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-full md:w-16 md:h-16 md:mb-4">
                  <modalData.icon className="w-6 h-6 text-[#D4AF37] md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2 md:text-2xl md:mb-3">
                  {modalData.title}
                </h3>
                <div className="relative w-full mb-4 aspect-[16/9] overflow-hidden rounded-2xl md:mb-6">
                  <Image
                    src={modalData.image}
                    alt={modalData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-xs text-gray-700 md:text-base">
                  {modalData.longDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}
