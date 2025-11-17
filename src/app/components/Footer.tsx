import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Updated background to gold to black gradient
    <footer className="px-5 py-12 text-white bg-[#333333] md:px-24">
      <div className="container mx-auto">
        {/* Top Section: Logo and Social Media */}
        {/* Updated border color for contrast on the new gradient */}
        <div className="flex flex-col items-center justify-between pb-8 mb-8 border-b border-gray-600 md:flex-row">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src={"./X-Pay-light.png"}
                // Updated alt text
                alt={"X Pay White Logo"}
                width={150}
                height={50}
                className="w-32 h-auto"
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            {/* Updated social media icon backgrounds to gold/yellow */}
            <Link
              href="https://www.facebook.com/people/Smatpay/61563697798654/?rdid=50bxiSV1lOzF5f2r&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17FR9odziS%2F"
              className="p-3 text-[#333333] transition duration-300 ease-in-out bg-[#FFC300] rounded-full hover:bg-[#CC9900]"
            >
              <FaFacebookF className="text-xl" />
            </Link>
            <Link
              href="https://www.instagram.com/smat_pay?igsh=NTc4MTIwNjQ2YQ=="
              className="p-3 text-[#333333] transition duration-300 ease-in-out bg-[#FFC300] rounded-full hover:bg-[#CC9900]"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              href="#"
              className="p-3 text-[#333333] transition duration-300 ease-in-out bg-[#FFC300] rounded-full hover:bg-[#CC9900]"
            >
              <FaXTwitter className="text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/smatpay-africa/"
              className="p-3 text-[#333333] transition duration-300 ease-in-out bg-[#FFC300] rounded-full hover:bg-[#CC9900]"
            >
              <FaLinkedin className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Head Office */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Head Office</h3>

            {/* Address */}
            <div className="mb-4">
              <p className="text-sm text-gray-300">
                Montague Office Park - Ground Floor, Main Block
              </p>
              <p className="text-sm text-gray-300">
                Cnr Cedar Road & Cedar Boulevard, Broadacres, JHB 2191
              </p>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link
                  // Updated domain to xpay.africa
                  href="https://docs.x-pay.co.za/"
                  className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/resources/faqs"
                  className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white"
                >
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  // Updated domain to xpay.africa
                  href="https://crm.xpay.africa/knowledge-base"
                  className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white"
                >
                  Knowledge Base
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  // Updated domain to xpay.africa
                  href="https://merchant.xpay.africa/sign-up"
                  className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>

            {/* Phone Numbers */}
            <div className="mb-4">
              <p className="text-sm font-medium text-white">Phone</p>
              <ul className="ml-2 space-y-1 text-sm text-gray-300">
                <li>JHB: <a href="tel:+27103925031" className="hover:underline">+27 10 392 5031</a></li>
                <li>CPT: <a href="tel:+27213955031" className="hover:underline">+27 21 395 5031</a></li>
                <li>PTA: <a href="tel:+27122925990" className="hover:underline">+27 12 292 5990</a></li>
              </ul>
            </div>

            {/* Emails */}
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <ul className="ml-2 space-y-1 text-sm text-gray-300">
                {/* Updated email addresses */}
                <li><a href="mailto:info@xpay.africa" className="hover:underline">info@xpay.africa</a></li>
                <li><a href="mailto:support@xpay.africa" className="hover:underline">support@xpay.africa</a></li>
                <li><a href="mailto:sales@xpay.africa" className="hover:underline">sales@xpay.africa</a></li>
              </ul>
            </div>
          </div>


          {/* About X Pay */}
          <div>
            {/* Updated heading */}
            <h3 className="mb-4 text-lg font-semibold">About X Pay</h3>
            <p className="text-sm text-gray-300">
              Secure and Convenient Payments. Your trusted partner for online
              transactions.
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        {/* Updated border color for contrast on the new gradient */}
        <div className="flex flex-col items-start justify-between pt-8 text-sm text-white border-t border-gray-600 md:flex-row md:items-center">
          <p className="mb-4 md:mb-0">
            Copyright © {currentYear}, All rights reserved. Powered by Smatech
            Group
          </p>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
            <Link href="#" className="transition duration-300 ease-in-out hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="#" className="transition duration-300 ease-in-out hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition duration-300 ease-in-out hover:text-white">
              Acceptable Use Policy
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Icon - Kept green as it's a standard branding color */}
      <Link
        href="https://wa.me/+263789566428"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 p-4 text-white transition duration-300 ease-in-out bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </footer>
  );
}