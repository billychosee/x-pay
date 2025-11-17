"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ContactForm from "./ContactForm";

// Schema.org structured data for SEO
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://xpay.co.za/contact",
  name: "Contact X Pay",
  description:
    "Get in touch with the X Pay team. Contact us for customer support, sales inquiries, or partnership opportunities.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+27-10-392-5031",
      contactType: "customer service",
      areaServed: ["ZA", "ZW"],
      availableLanguage: "en",
    },
    {
      "@type": "ContactPoint",
      telephone: "+27-21-395-5031",
      contactType: "customer service",
      areaServed: ["ZA"],
      availableLanguage: "en",
    },
    {
      "@type": "ContactPoint",
      telephone: "+27-12-292-5990",
      contactType: "customer service",
      areaServed: ["ZA"],
      availableLanguage: "en",
    },
  ],
};

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// ✅ Framer Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Your message was sent successfully!");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(`⚠️ Error: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Network error. Please try again.");
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/contact-us-hero.jpg"
            alt="Contact Us Hero"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-80"></div>
        </motion.div>

        <motion.div
          className="relative z-10 max-w-2xl px-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl text-[#D4AF37]">
            Contact Us
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            We're here to help. Reach out to our team for any inquiries.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.section
        className="relative z-20 w-full max-w-6xl px-5 py-20 mx-auto mb-24 -mt-20 bg-gray-100 shadow-lg md:px-12 lg:-mt-32 rounded-xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container grid grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-8">
              Contact Information
            </h2>

            {/* Address */}
            <motion.div
              className="flex items-start mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 mr-4 bg-gray-300 rounded-full">
                <FaMapMarkerAlt className="text-xl text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Head Office</h3>
                <p className="text-sm text-gray-600">
                  Montague Office Park - Ground Floor, Main Block
                </p>
                <p className="text-sm text-gray-600">
                  Cnr Cedar Road & Cedar Boulevard, Broadacres, JHB 2191
                </p>
              </div>
            </motion.div>

            {/* Phone Numbers */}
            <motion.div
              className="flex items-start mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 mr-4 bg-gray-300 rounded-full">
                <FaPhoneAlt className="text-xl text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Call Us</h3>
                <p className="text-sm text-gray-600">
                  JHB:{" "}
                  <a href="tel:+27103925031" className="hover:underline">
                    +27 10 392 5031
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  CPT:{" "}
                  <a href="tel:+27213955031" className="hover:underline">
                    +27 21 395 5031
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  PTA:{" "}
                  <a href="tel:+27122925990" className="hover:underline">
                    +27 12 292 5990
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Emails */}
            <motion.div
              className="flex items-start mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 mr-4 bg-gray-300 rounded-full">
                <FaEnvelope className="text-xl text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Email Us</h3>
                <p className="text-sm text-gray-600">
                  <a href="mailto:info@xpay.africa" className="hover:underline">
                    info@xpay.africa
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  <a
                    href="mailto:support@xpay.africa"
                    className="hover:underline"
                  >
                    support@xpay.africa
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  <a
                    href="mailto:sales@xpay.africa"
                    className="hover:underline"
                  >
                    sales@xpay.africa
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-[#D4AF37] mb-4">
                Follow our social media
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    href: "#",
                    icon: <FaFacebookF className="text-xl" />,
                  },
                  {
                    href: "#",
                    icon: <FaInstagram className="text-xl" />,
                  },
                  { href: "#", icon: <FaXTwitter className="text-xl" /> },
                  {
                    href: "#",
                    icon: <FaLinkedin className="text-xl" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white rounded-full p-2 flex items-center justify-center transition-all"
                    >
                      {item.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </motion.section>
    </>
  );
}
