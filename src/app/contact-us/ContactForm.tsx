"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
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
        alert(`⚠️ Error: ${data.message || "Failed to send message"}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Network error. Please try again.");
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
      onSubmit={handleSubmit}
    >
      {["name", "company", "phone", "email"].map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block mb-1 text-sm text-gray-700 capitalize"
          >
            {field}
          </label>
          <motion.input
            type={field === "email" ? "email" : "text"}
            id={field}
            value={formData[field as keyof FormData]}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none bg-white text-black"
            whileFocus={{ scale: 1.02 }}
            required
          />
        </div>
      ))}

      <div className="col-span-2">
        <label htmlFor="subject" className="block mb-1 text-sm text-gray-700">
          Subject
        </label>
        <motion.input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none bg-white text-black"
          whileFocus={{ scale: 1.02 }}
          required
        />
      </div>

      <div className="col-span-2">
        <label htmlFor="message" className="block mb-1 text-sm text-gray-700">
          Message
        </label>
        <motion.textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none bg-white text-black"
          whileFocus={{ scale: 1.02 }}
          required
        />
      </div>

      <div className="col-span-2">
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-3 rounded-full font-bold hover:from-[#B8941F] hover:to-[#D4AF37] cursor-pointer transition-all"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 12px rgba(212,175,55,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMessageSquare className="inline mr-2" /> Send
        </motion.button>
      </div>
    </form>
  );
}
