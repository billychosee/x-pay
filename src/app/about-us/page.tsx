'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaHandshake, FaGlobeAfrica } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Partners
const patnersLogos = [
  { name: "SmatQr", logo: "/smat_qr_logo.svg" },
  { name: "SmatProp", logo: "/smatprop_logo.svg" },
  { name: "AWS", logo: "/aws_logo.png" },
  { name: "Njere", logo: "/njere_logo.svg" },
];

// Schema.org structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SmatPay",
  "url": "https://smatpay.co.za/",
  "logo": "https://smatpay.co.za/smatpay_logo.svg",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+27-10-392-5031",
      "contactType": "customer service",
      "areaServed": ["ZA"],
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+27-21-395-5031",
      "contactType": "customer service",
      "areaServed": ["ZA"],
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+27-12-292-5990",
      "contactType": "customer service",
      "areaServed": ["ZA"],
      "availableLanguage": "en"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/people/Smatpay/61563697798654/",
    "https://twitter.com/smatpay",
    "https://www.instagram.com/smat_pay",
    "https://www.linkedin.com/company/smatpay-africa/"
  ],
  "description": "SmatPay is a secure and seamless payment gateway in South Africa that empowers businesses and individuals with innovative digital payment solutions. We are a product of Smatech Group.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Montague Office Park, Ground Floor, Main Block, Cnr Cedar Road & Cedar Boulevard, Broadacres",
    "addressLocality": "Johannesburg",
    "addressRegion": "Gauteng",
    "postalCode": "2191",
    "addressCountry": "ZA"
  }
};


// Framer Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Props interface for Counter component
interface CounterProps {
  from: number;
  to: number;
  label: string;
}

// Counter component for stats
const Counter: React.FC<CounterProps> = ({ from, to, label }) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const duration = 2000;
      const increment = (end - start) / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.round(start));
      }, 10);

      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return (
    <div ref={ref}>
      <span className="block text-5xl font-extrabold text-[#2f1991] mb-2">{count}{label.includes("Served") ? "+" : ""}</span>
      <p className="text-xl text-gray-600">{label}</p>
    </div>
  );
};

export default function About() {
  const services = [
    { title: "Payment Gateway", desc: "Securely accept payments via mobile money, debit, and credit cards with our flexible gateway.", image: "/aboutus-payment.jpg" },
    { title: "POS Machines", desc: "Our fiscalization-ready POS terminals accept card, mobile money, and QR code payments in-store.", image: "/pos-machine.jpg" },
    { title: "Recurring Billing", desc: "Automate subscriptions and regular payments, perfect for services and memberships.", image: "/billing.jpg" },
    { title: "Fiscalized Invoicing", desc: "Stay compliant with SARS regulations with our automatically fiscalized invoicing system.", image: "/fiscal.jpg" },
    { title: "Developer APIs", desc: "Easily integrate our platform into your app or website using our comprehensive and well-documented APIs.", image: "/api.jpg" },
    { title: "Value-Added Services", desc: "Earn additional revenue by selling digital services like airtime and ZESA directly from our platform.", image: "/vas.jpg" }
  ];

  return (
    <>
      <Head>
        <title>About Us | SmatPay - Redefining Digital Payments in Zimbabwe</title>
        <meta
          name="description"
          content="SmatPay is a secure and seamless payment gateway in Zimbabwe that empowers businesses and individuals with innovative digital payment solutions. We are a product of Smatech Group."
        />
        {/* Open Graph (OG) meta tags for social media sharing */}
        <meta property="og:title" content="About SmatPay: Our Mission and Values" />
        <meta property="og:description" content="Discover the story behind SmatPay, our mission to redefine digital payments, and our commitment to empowering businesses in Zimbabwe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smatpay.africa/about-us" />
        <meta property="og:image" content="https://smatpay.africa/smatpay_logo.png" />
        <link rel="canonical" href="https://smatpay.africa/about-us" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      <main className="relative text-black bg-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-200px,rgba(129,65,213,0.35),transparent_70%),radial-gradient(1200px_600px_at_50%_120%,rgba(47,25,145,0.25),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden group">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/smatpay - lady on laptop.jpg"
              alt="About Us Hero"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-blue-900 opacity-70" />
          </motion.div>
          <div className="relative z-10 max-w-2xl px-4">
            <motion.h1
              className="mb-4 text-4xl font-bold leading-tight sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg font-light sm:text-xl md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join us in shaping the future of payments in Africa.
            </motion.p>
          </div>
        </div>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="container grid items-center gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
            {/* Text */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold text-[#2f1991] md:text-2xl">Who We Are</motion.h2>
              <motion.p variants={fadeUp} className="mb-4 text-gray-700">
                SmatPay is more than just a payment gateway; we are the secure bridge between merchants and customers, redefining digital commerce in South Africa. As a proud product of the <strong>Smatech Group</strong>, we are committed to building a robust and flexible payment ecosystem designed for the future of Africa's digital economy.
              </motion.p>
              <motion.p variants={fadeUp} className="mb-4 text-gray-700">
                Our mission is to tackle the key payment challenges faced by businesses—such as transaction failures, high fees, and limited options—through a modern, fully integrated platform. We empower businesses to grow while promoting financial inclusion for all.
              </motion.p>
            </motion.div>

            {/* Circle Image */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="absolute bg-[#e0b0ff] rounded-full w-60 h-60 md:w-72 md:h-72 top-4 left-4 md:top-8 md:left-8 opacity-70"></div>
              <div className="absolute bg-[#9966ff] rounded-full w-80 h-80 md:w-96 md:h-96 bottom-4 right-4 md:bottom-8 md:right-8 opacity-50"></div>
              <div className="relative z-10">
                <Image
                  src="/man-on-laptop.jpg"
                  alt="Working on laptop"
                  width={500}
                  height={500}
                  className="rounded-full shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="py-20 bg-purple-50">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-12 md:text-4xl">Our Core Values</h2>
            <motion.div
              className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { title: "Security", desc: "Bank-grade encryption and real-time fraud detection ensure your data is always safe.", icon: FaShieldAlt },
                { title: "Innovation", desc: "We continuously evolve to bring you the most advanced payment solutions.", icon: FaRocket },
                { title: "Trust", desc: "We build long-lasting relationships by providing reliable and transparent services.", icon: FaHandshake },
                { title: "Local Focus", desc: "Our solutions are specifically tailored to the unique needs of the African market.", icon: FaGlobeAfrica }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center p-8 transition bg-white shadow-md rounded-2xl hover:shadow-xl"
                  variants={fadeUp}
                >
                  <div className="mb-4 text-5xl text-[#2f1991]">
                    <value.icon />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1a202c]">{value.title}</h3>
                  <p className="text-gray-800">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
  <div className="container px-6 mx-auto max-w-7xl">
    <h2 className="text-3xl font-bold text-center text-[#2f1991] mb-12 md:text-4xl">What We Offer</h2>
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, idx) => {
        const [showOverlay, setShowOverlay] = useState(false);

        return (
          <motion.div
            key={idx}
            className="relative overflow-hidden shadow-md cursor-pointer rounded-xl group"
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowOverlay(!showOverlay)} // toggles on mobile
          >
            <div className="relative w-full h-64 overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 bg-black/60 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-6
                ${showOverlay ? 'opacity-100' : 'opacity-0'}
                md:group-hover:opacity-100
              `}
            >
              <h3 className="mb-2 text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-white">{service.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


        {/* Stats Section */}
        <section className="py-20 bg-purple-50">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h2 className="mb-12 text-3xl font-bold text-[#2f1991] md:text-4xl">We Power Success</h2>
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp}><Counter from={0} to={10} label="Years of Experience" /></motion.div>
              <motion.div variants={fadeUp}><Counter from={0} to={2000} label="Apps Processed" /></motion.div>
              <motion.div variants={fadeUp}><Counter from={0} to={160} label="Businesses Served" /></motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partners & Clients Section */}
        <section className="py-20 bg-white">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h2 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">Our Trusted Partners</h2>
            <p className="max-w-3xl mx-auto mt-3 text-gray-600">
              Trusted by industry leaders worldwide, SmatPay partners with the world's leading financial institutions and technology providers to deliver seamless payment experiences.
            </p>
            <div className="mt-10 overflow-hidden border border-gray-200 rounded-2xl bg-purple-50">
              <div className="flex animate-[marquee_30s_linear_infinite] gap-12 p-6 [--gap:3rem] hover:[animation-play-state:paused]">
                {[...patnersLogos, ...patnersLogos].map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="transition shrink-0">
                    <Image src={item.logo} alt={item.name} width={120} height={60} className="object-contain w-auto h-12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-16">
          <div
            className="relative mx-6 overflow-hidden text-white bg-center bg-cover shadow-lg max-w-7xl rounded-3xl sm:mx-auto"
            style={{ backgroundImage: "url('/holding_payment_card.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8141D5]/80 to-[#2f1991]/70" />
            <div className="relative z-10 max-w-4xl px-6 py-20 mx-auto text-center">
              <p className="text-base font-semibold">Ready to get started?</p>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                Experience the SmatPay difference for yourself!
              </h3>
              <Link
                href="https://merchant-dev.x-pay.co.za"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-[#8141D5] shadow-lg ring-1 ring-white/40 transition hover:bg-[#f3f3f3]"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
