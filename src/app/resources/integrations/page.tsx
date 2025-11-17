'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  FaCode,
  FaPaintBrush,
  FaLock,
  FaSyncAlt,
  FaKey,
  FaPlug,
  FaLayerGroup,
  FaComments,
  FaRocket,
  FaTools,
  FaSearch,
  FaCog,
} from 'react-icons/fa';
import { FaShop, FaMobile, FaLaptopCode } from 'react-icons/fa6';

const integrationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'X Pay Integrations',
  description:
    "Explore the various platforms and services that integrate seamlessly with X Pay's payment gateway. Connect with popular e-commerce platforms and APIs.",
  url: 'https://xpay.co.za/integrations',
};

const KeyIntegrationComponents = [
  { title: 'API Integration', description: 'Our robust API allows for direct communication between your system and our payment gateway, ensuring real-time transaction processing', icon: FaCode },
  { title: 'Customizable Checkout', description: 'Tailor the checkout experience to match your brand identity and customer preferences.', icon: FaPaintBrush },
  { title: 'Security Protocols', description: 'We prioritize data protection with advanced encryption and fraud prevention measures.', icon: FaLock },
  { title: 'Recurring Billing', description: 'Efficiently manage subscription-based payments and customer profiles', icon: FaSyncAlt },
  { title: 'Tokenization', description: 'Enhance security by storing encrypted card data instead of sensitive information', icon: FaKey },
  { title: 'Plugin and SDK Support', description: 'Quickly integrate with popular e-commerce platforms using our pre-built plugins and software development kits (SDKs).', icon: FaPlug },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Integrations() {
  return (
    <>
      <Head>
        <title>Integrations | X Pay</title>
        <meta name="description" content="Explore the various platforms and services that integrate seamlessly with X Pay's payment gateway. Connect with popular e-commerce platforms and APIs." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationsSchema) }} />
      </Head>

      <div>

        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
          <motion.div className="absolute inset-0 z-0" initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 1.2, ease: "easeOut" }}>
            <Image src="/integration-hero.jpg" alt="Integration Hero" fill className="object-cover" quality={100} priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-[#D4AF37] opacity-80"></div>
          </motion.div>

          <motion.div className="relative z-10 max-w-2xl px-4" variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl text-[#D4AF37]">Integrations</h1>
            <p className="mb-6 text-lg font-light sm:text-xl md:text-base">Integrating a payment gateway into your existing systems is crucial for a smooth and secure customer checkout experience.</p>
            <a href="http://doc.xpay.africa/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 font-semibold text-white transition bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full hover:from-[#B8941F] hover:to-[#D4AF37]">
              Explore API Docs
            </a>
          </motion.div>
        </div>

        {/* Why Integrate Section */}
<motion.section
  className="py-20 bg-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="container grid gap-16 px-4 mx-auto md:grid-cols-2 md:items-stretch">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col justify-center"
    >
      <h2 className="mb-6 text-4xl font-bold text-[#D4AF37]">
        Why Integrate with X Pay?
      </h2>
      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        Seamlessly integrate robust payment processing into your existing systems and applications. Our payment gateway solutions offer flexible integration options to align with your business needs. Whether you operate an e-commerce platform, mobile app, or point-of-sale system, we provide the tools and expertise to ensure a smooth transition.
        <br /><br />
        By integrating our gateway, you can streamline checkout processes, enhance security, and expand your customer base. Our solutions are designed to optimize transaction efficiency, reduce chargebacks, and provide real-time insights into payment data.
      </p>
      {/* CTA removed here */}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative mt-10 md:mt-0"
    >
      <div
        className="absolute top-[-40px] left-[-40px] w-48 h-48 z-0"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      ></div>
      <div className="relative z-10 h-full overflow-hidden transition rounded-lg shadow-2xl hover:scale-105">
        <Image
          src="/integration section.png"
          alt="A man working on a laptop"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </motion.div>
  </div>
</motion.section>


        {/* Integration Options */}
        <motion.section id="integration-options" className="py-20 bg-gray-100" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
          <div className="container px-4 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-gray-800">Integration Options</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { icon: FaShop, title: 'E-commerce Platforms', desc: 'Pre-built integrations for WooCommerce, Magento, and Shopify.' },
                { icon: FaLaptopCode, title: 'Custom Applications', desc: 'API-based integration for any custom-developed application.' },
                { icon: FaMobile, title: 'Mobile Apps', desc: 'Secure in-app payments via our mobile SDK.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 transition bg-white rounded-lg shadow-md hover:shadow-xl">
                  <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl text-[#D4AF37] rounded-full bg-gray-100"><item.icon /></div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Key Integration Components */}
        <motion.section className="relative py-20 overflow-hidden bg-black" style={{ backgroundImage: "url('/shopping-cart.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.4 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-[#D4AF37] opacity-70"></div>
          <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-white">Key Integration Components</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {KeyIntegrationComponents.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-8 text-center transition bg-white rounded-lg shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full"><item.icon className="w-10 h-10 text-[#D4AF37]" /></div>
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Implementation Process */}
        <motion.section className="py-20 bg-gray-100" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.4 }}>
          <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-gray-800">Our Implementation Process</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: FaCog, color: 'text-orange-500 bg-orange-100', title: 'API Implementation', desc: 'Our dev team integrates the payment gateway API.' },
                { icon: FaSearch, color: 'text-red-500 bg-red-100', title: 'System Assessment', desc: 'We analyze your current systems and integration points.' },
                { icon: FaTools, color: 'text-blue-500 bg-blue-100', title: 'Testing & Optimization', desc: 'Rigorous testing ensures performance & security.' },
                { icon: FaRocket, color: 'text-green-500 bg-green-100', title: 'Go-Live', desc: 'Launch integrated payment with minimal disruption.' },
                { icon: FaComments, color: 'text-orange-500 bg-orange-100', title: 'Ongoing Support', desc: 'Dedicated support for maintenance.' },
                { icon: FaLayerGroup, color: 'text-[#D4AF37] bg-yellow-100', title: 'Integration Review', desc: 'Comprehensive review post-integration.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-8 text-center transition bg-white rounded-lg shadow-lg hover:shadow-xl">
                  <div className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full ${item.color}`}><item.icon className="w-10 h-10" /></div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Ready to Enhance Section */}
        <motion.section className="py-20 bg-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
          <div className="container grid gap-8 px-4 mx-auto md:grid-cols-2">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl hover:scale-105 transition">
                <Image src="/ready-to-enhance.jpg" alt="A person working at a desk" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Ready to enhance your payment processing?</h2>
              <p className="mb-6 text-gray-600">Streamline payments, secure transactions, and boost conversions with X Pay integration.</p>
              <a href="http://doc.xpay.africa/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 font-semibold text-white transition bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full hover:from-[#B8941F] hover:to-[#D4AF37]">
                See API Documentation
              </a>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </>
  );
}