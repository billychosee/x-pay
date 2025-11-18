// src/app/page.tsx
"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Footer from "@/app/components/Footer";
import WhyChooseCarousel from "@/app/components/WhyChooseCarousel";
import FeaturesSection from "./components/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";

// Import all motion variants from the new file
import {
  fadeUp,
  fadeIn,
  scaleUp,
  slideInLeft,
  slideInRight,
  rotateIn,
  stagger,
  pulse,
  bounce,
  floating,
  shimmer,
} from "./components/motionVariants";

// Icons (Font Awesome)
import {
  FaCog,
  FaDollarSign,
  FaLock,
  FaExclamationCircle,
  FaCreditCard,
  FaBriefcase,
  FaEnvelopeOpenText,
  FaGlobe,
  FaDivide,
  FaHandshake,
  FaGlobeAmericas,
  FaUserCheck,
  FaMobileAlt,
} from "react-icons/fa";

// Data
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

const popularPlatforms = [
  { name: "Magento", logo: "/magento.png" },
  { name: "Presta_shop", logo: "/presta_shop.png" },
  { name: "Shopify", logo: "/shopify.png" },
  { name: "Whmcs", logo: "/whmcs.png" },
  { name: "Woo_commerce", logo: "/woo_commerce.png" },
];

const whyChooseUsItems = [
  {
    title: "Seamless Integrations",
    description:
      "Provides seamless integration with e-commerce platforms, mobile apps, and other systems through comprehensive APIs and plugins.",
    icon: FaCog,
  },
  {
    title: "Affordable",
    description:
      "Enjoy favorable customized rates, transact from just $1, save more with our competitive pricing, and watch your profits grow with every transaction.",
    icon: FaDollarSign,
  },
  {
    title: "Security",
    description:
      "Utilizes International and advanced PCI standard encryption protocols to protect sensitive data during transactions.",
    icon: FaLock,
  },
  {
    title: "Fraud Detection",
    description:
      "Implements robust fraud detection and prevention mechanisms to safeguard against fraudulent activities.",
    icon: FaExclamationCircle,
  },
  {
    title: "Multiple Payment Methods",
    description:
      "Supports a wide range of payment options such as credit/debit cards, digital wallets, and local payment methods (e.g., InnBucks, OneMoney, EcoCash, Omari, Visa, ZimSwitch)",
    icon: FaCreditCard,
  },
  {
    title: "No \"system down\" frustrations",
    description:
      "X-PAY is built for scalability and uptime, ensuring that customers can always complete their purchases.",
    icon: FaBriefcase,
  },
];

const keyFeaturesItems = [
  {
    title: "Payment Options",
    description:
      "Supports payments through Apple Pay, G Pay, PayFlex, Visa, and Mastercard.",
    icon: FaCreditCard,
  },
  {
    title: "Subscriptions",
    description: "Automate recurring billing at specified intervals.",
    icon: FaEnvelopeOpenText,
  },
  {
    title: "Tokenization",
    description: "Enable recurring credit card transactions securely.",
    icon: FaGlobe,
  },
  {
    title: "Payment Requests",
    description: "Generate payment request links, or codes and buttons.",
    icon: FaDollarSign,
  },
  {
    title: "Split Payments",
    description: "Divide payments instantly with a third party.",
    icon: FaDivide,
  },
  {
    title: "Onsite Payments",
    description: "Facilitate a seamless checkout process on your site.",
    icon: FaCreditCard,
  },
];

const benefitsOfSmatpayItems = [
  {
    title: "Increased Convenience and Choice",
    description: "A wider range of secure payment options",
    icon: FaHandshake,
  },
  {
    title: "Expanded Market Reach",
    description:
      "By accepting a variety of payment methods, businesses can attract a wider customer base, including those who may not have access to traditional credit cards.",
    icon: FaGlobeAmericas,
  },
  {
    title: "Customers",
    description:
      "Access to desired products and services on convenient debit order plans. Build credit history over time (future development)",
    icon: FaUserCheck,
  },
  {
    title: "Faster Mobile and Web Checkout Process",
    description:
      "Seamless integration with online stores allows for quick and easy checkouts, reducing cart abandonment rates",
    icon: FaMobileAlt,
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <title>X-Pay | Secure & Seamless Payment Gateway for Zimbabwe & Africa</title>
        <meta
          name="description"
          content="X-Pay is the leading payment gateway in Zimbabwe, offering seamless integration for e-commerce and businesses to accept mobile money, Zimswitch, Visa, and Mastercard payments securely."
        />
      </Head>

      {/* Page Wrapper */}
      <main className="relative text-black bg-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-200px,rgba(255,195,0,0.35),transparent_70%),radial-gradient(1200px_600px_at_50%_120%,rgba(204,153,0,0.25),transparent_70%)]" />

        {/* HERO */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32">
          {/* Animated blurred purple background elements */}
          <motion.div
            className="absolute rounded-full bg-[#FFC300] top-1/4 left-1/4 w-72 h-72 opacity-15 blur-3xl"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full bg-[#CC9900] bottom-1/4 right-1/4 w-96 h-96 opacity-10 blur-3xl"
            animate={{
              x: [-100, 100, -100],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-[#CC9900] top-1/2 right-1/3 opacity-12 blur-2xl"
            animate={{
              x: [0, -150, 0],
              y: [0, 75, 0],
              rotate: [0, -180, -360],
            }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />

          {/* Additional animated elements */}
          <motion.div
            className="absolute w-40 h-40 bg-[#FFC300] rounded-full top-1/3 right-1/4 opacity-20 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-32 h-32 bg-[#CC9900] rounded-full bottom-1/3 left-1/4 opacity-20 blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />

          {/* Grid overlay */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="container z-10 px-6 mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div variants={stagger} initial="hidden" animate="show" className="text-center lg:text-left">
                <motion.h1
                  variants={fadeUp}
                  className="text-3xl font-extrabold tracking-tight text-[#1a133d] sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  Empowering Businesses with Next‑Gen Payment Solutions
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-base text-gray-600 sm:text-lg md:text-xl lg:text-lg xl:text-xl"
                  animate={{
                    color: ["#6B7280", "#4B5563", "#6B7280"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Redefining Payment Excellence
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-start">
                  <motion.div
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    variants={pulse}
                  >
                    <Link
                      href="https://merchant-dev.x-pay.co.za"
                      className="inline-flex items-center justify-center rounded-full bg-[#FFC300] px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-[#333333] shadow-lg shadow-[#000000]/20 transition hover:scale-[1.02] hover:brightness-110 xl:text-sm lg:text:xs"
                    >
                      Register
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    variants={pulse}
                  >
                    <Link
                      href="#discover"
                      className="inline-flex items-center justify-center rounded-full border border-[#CC9900] bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-[#CC9900] transition hover:border-[#FFC300] hover:bg-[#FFC300] hover:text-[#333333]"
                    >
                      Discover More
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="relative"
              >
                <div className="relative w-full max-w-xl p-4 mx-auto border shadow-2xl rounded-3xl border-white/40 bg-white/60 backdrop-blur">
                  <Image
                    src="/smatpay-hero-art.png"
                    alt="SmatPay payment solutions hero artwork"
                    width={1000}
                    height={700}
                    className="object-contain w-full h-auto rounded-2xl"
                    priority
                  />
                  <motion.div
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-[#CC9900] opacity-70 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -left-6 -bottom-6 h-16 w-16 rounded-2xl bg-[#FFC300] opacity-50 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ACCEPTED METHODS (Marquee) */}
        <section className="relative py-16" ref={ref}>
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={stagger}
            className="container px-6 mx-auto text-center max-w-7xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold text-[#CC9900] sm:text-3xl xl:text-2xl lg:text-xl"
              whileHover={{ scale: 1.02 }}
            >
              Accept All Major Payment Methods
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto mt-3 text-gray-600"
            >
              Integrate once and accept payments from all popular local and international methods your customers prefer.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 overflow-hidden border border-[#CC9900] rounded-2xl bg-[#FFC300]/20"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="flex animate-[marquee_30s_linear_infinite] gap-12 p-6 [--gap:3rem] hover:[animation-play-state:paused]"
                whileHover={{ animationPlayState: "paused" }}
              >
                {[...paymentLogos, ...paymentLogos].map((item, idx) => (
                  <motion.div
                    key={`${item.name}-${idx}`}
                    className="transition shrink-0"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image src={item.logo} alt={item.name} width={120} height={60} className="object-contain w-auto h-12" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="discover" className="relative py-20">
  <div className="container grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
    {/* Text block */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center lg:text-left lg:order-1"
    >
      <motion.h3
        className="text-2xl font-bold text-[#CC9900] sm:text-3xl"
        whileHover={{
          color: ["#CC9900", "#FFC300", "#CC9900"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        The Ultimate Payment Gateway
      </motion.h3>
      <motion.p
        className="mt-4 text-gray-700"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {`South Africa's e-commerce sector is experiencing rapid growth, creating increasing demand for seamless and reliable digital transactions. Despite this momentum, many businesses face challenges such as high transaction costs and the technological limitations of existing payment gateways, particularly in the mobile space. X Pay bridges this gap by providing a versatile and fully integrated payment gateway tailored to meet the unique needs of the South African market.`.split(' ').map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            style={{ display: 'inline-block' }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </motion.div>

    {/* Image block */}
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="lg:order-2"
      whileHover={{
        rotate: 1,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative mx-auto h-[28rem] w-full max-w-xl">
        <Image
          src="/lady-on-phone.jpg"
          alt="Lady on phone"
          fill
          className="object-cover rounded-3xl"
        />
        <motion.div
          className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-[#CC9900] opacity-60 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="pointer-events-none absolute -top-6 -right-1sp h-16 w-16 rounded-2xl bg-[#FFC300] opacity-40 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.div>
  </div>
</section>



<section className="relative py-24 overflow-hidden">
  <motion.div
    className="absolute inset-0 -z-10 bg-[url('/Global-Map.png')] bg-cover bg-center opacity-10"
    animate={{
      scale: [1, 1.05, 1],
    }}
    transition={{ duration: 20, repeat: Infinity }}
  />
  <div className="container items-center gap-12 px-6 mx-auto max-w-7xl lg:grid lg:grid-cols-2">
    {/* Text and button block */}
    <motion.div
      className="mt-10 text-center lg:mt-0 lg:order-2 lg:text-left"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={slideInRight}
    >
      <motion.h3
        className="text-2xl font-bold text-[#CC9900] sm:text-3xl"
        whileHover={{
          scale: 1.02,
          x: 10,
          transition: { duration: 0.3 },
        }}
      >
        Secure, Simple, and Sophisticated
      </motion.h3>
      <motion.p
        className="mt-4 text-gray-700"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.03 },
          },
        }}
      >
        {`X-Pay is a sophisticated payment gateway that serves as a pivotal intermediary between merchants and customers during online transactions. As a payment gateway, X-Pay facilitates a secure and efficient transfer of funds from customers to merchants, enabling seamless transactions across various digital platforms, from websites to mobile apps.`.split(' ').map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, x: -5 },
              show: { opacity: 1, x: 0 },
            }}
            style={{ display: 'inline-block' }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        className="mt-6"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        variants={pulse}
      >
        <Link
          href="https://merchant-dev.x-pay.co.za"
          className="block w-full text-center sm:inline-flex sm:w-auto sm:text-left rounded-full bg-white px-6 py-3 mb-5 text-sm font-semibold text-[#CC9900] ring-1 ring-[#CC9900] transition hover:bg-[#FFC300] hover:text-[#333333]"
        >
          Create an Account Now
        </Link>
      </motion.div>
    </motion.div>

    {/* Image block */}
    <motion.div
      className="relative mx-auto h-[28rem] w-full max-w-xl order-2 lg:order-1"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={slideInLeft}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <Image
        src="/lady-with-shopping-bag.jpg"
        alt="Lady with purple background"
        fill
        className="object-cover rounded-3xl"
      />
    </motion.div>
  </div>
</section>


        {/* INTEGRATIONS */}
        <section id="integrations" className="relative py-20 bg-[#FFC300]/10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="container px-6 mx-auto text-center max-w-7xl"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-bold text-[#CC9900] sm:text-3xl"
            >
              Integrate with Popular Platforms
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto mt-3 text-gray-600"
            >
              Easily integrate X-Pay into your online store. Our intuitive interface and detailed documentation guide you through the process, ensuring a smooth setup
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 mt-10 place-items-center sm:grid-cols-3 lg:grid-cols-5"
            >
              {popularPlatforms.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="w-full py-1 transition bg-white border border-gray-200 shadow-sm rounded-2xl"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Image src={item.logo} alt={item.name} width={140} height={80} className="object-contain w-auto h-20 mx-auto" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* WHY X-PAY */}
        <section id="why" className="relative py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="container px-6 mx-auto text-center max-w-7xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-widest text-[#CC9900]"
            >
              WHY X-PAY
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="mt-2 text-3xl font-extrabold text-[#CC9900] xl:text-[44px]"
            >
              Why Choose Us ?
            </motion.h3>

            <WhyChooseCarousel />
          </motion.div>
        </section>

        {/* KEY FEATURES */}
        <FeaturesSection keyFeaturesItems={keyFeaturesItems} />

        {/* BENEFITS */}
        <BenefitsSection />

        {/* CTA BANNER */}
        <section className="pb-16">
  <motion.div
    className="relative mx-6 overflow-hidden text-white bg-center bg-cover shadow-lg max-w-7xl rounded-3xl sm:mx-auto"
    style={{ backgroundImage: "url('/holding_payment_card.jpg')" }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={scaleUp}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.5 },
    }}
  >
    <motion.div
      className="absolute inset-0 bg-[#CC9900]/80"
      animate={{
        background: [
          "linear-gradient(to top right, rgba(204, 153, 0, 0.8), rgba(255, 195, 0, 0.7))",
          "linear-gradient(to top right, rgba(204, 153, 0, 0.9), rgba(255, 195, 0, 0.8))",
          "linear-gradient(to top right, rgba(204, 153, 0, 0.8), rgba(255, 195, 0, 0.7))",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.div
      className="relative z-10 max-w-3xl px-6 py-20 mx-auto text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.p
        variants={fadeUp}
        className="text-base font-semibold"
      >
        Don't just take our word for it.
      </motion.p>
      <motion.h3
        variants={fadeUp}
        className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl"
      >
        Experience the X-Pay difference for yourself!
      </motion.h3>
      
      {/* The new "Get Started" button has been added here */}
      <motion.div variants={fadeUp}>
        <Link
          href="https://merchant-dev.x-pay.co.za"
          className="mt-8 inline-flex rounded-full bg-[#FFC300] px-8 py-3 text-sm font-bold text-[#333333] shadow-lg ring-1 ring-[#CC9900]/40 transition hover:bg-[#CC9900]"
        >
          Get Started
        </Link>
      </motion.div>
      
      <motion.div
        variants={pulse}
        initial="rest"
      />
    </motion.div>
  </motion.div>
</section>

      </main>
    </>
  );
}
