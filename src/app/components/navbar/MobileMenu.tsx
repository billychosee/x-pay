// src/components/navbar/mobilemenu.tsx
"use client";

import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "./config";
import { ChevronDown } from "lucide-react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  resourcesOpen: boolean;
  onToggleResources: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  resourcesOpen,
  onToggleResources,
}) => {
  return (
    <>
      {/* Mobile Drawer Overlay and Drawer */}
      <div className={`fixed inset-0 z-40 transition ${open ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClose}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 w-72 p-6 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 mt-12">
            {NAV_LINKS.map((l) =>
              l.label === "Resources" ? (
                <div key={l.label} className="flex flex-col gap-2">
                  <button
                    onClick={onToggleResources}
                    className="flex items-center justify-between text-sm font-semibold text-gray-800 transition hover:text-[#FFC300]"
                  >
                    {l.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {resourcesOpen && (
                    <div className="flex flex-col gap-2 pl-4 mt-1">
                      <Link
                        href="/resources/integrations/"
                        className="text-sm text-gray-700 hover:text-[#FFC300]"
                        onClick={onClose}
                      >
                        Integrations
                      </Link>
                      <Link
                        href="https://crm.smatpay.africa/knowledge-base"
                        className="text-sm text-gray-700 hover:text-[#FFC300]"
                        onClick={onClose}
                      >
                        Knowledge Base
                      </Link>
                      <a
                        href="/resources/faqs"
                        className="text-sm text-gray-700 hover:text-[#FFC300]"
                        onClick={onClose}
                      >
                        FAQs
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.label}
                  href={l.href ?? "#"}
                  className="text-sm font-semibold text-gray-800 transition hover:text-[#FFC300]"
                  onClick={onClose}
                >
                  {l.label}
                </Link>
              )
            )}

            <div className="flex flex-col gap-3 pt-4 mt-4 border-t">
  <Link
    href="/login"
    className="px-4 py-2 text-sm font-semibold text-center text-[#CC9900] transition border border-[#CC9900] rounded-full shadow-sm hover:bg-[#FFC300] hover:text-[#333333]"
    onClick={onClose}
  >
    Sign in
  </Link>
  <Link
    href="https://merchant.smatpay.africa/sign-up"
    className="px-4 py-2 text-sm font-semibold text-center text-[#333333] rounded-full shadow-md bg-[#FFC300]"
    onClick={onClose}
  >
    Get Started
  </Link>
</div>

          </div>
        </div>
      </div>
    </>
  );
};