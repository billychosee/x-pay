// src/components/navbar/navbar.tsx
"use client";

import React, { useState } from "react";
import { DeskNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "./config";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleResourcesDesktop = () => setResourcesOpen((v) => !v);
  const toggleResourcesMobile = () => setResourcesOpen((v) => !v);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      // navbar.tsx
<DeskNav
  resourcesOpen={resourcesOpen}
  onResourcesOpen={() => setResourcesOpen(true)}
  onResourcesClose={() => setResourcesOpen(false)}
/>


      {/* MOBILE NAVBAR (Header with Menu button) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex border-b shadow-sm md:hidden bg-white/70 backdrop-blur border-white/20">
        <div className="flex items-center justify-between w-full px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/X-Pay-Logo.png"
              alt="X Pay logo"
              width={96}
              height={96}
              className="rounded"
            />
          </a>

          {/* Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-4xl border border-[#CC9900] px-4 py-1.5 text-sm font-semibold text-[#CC9900] transition hover:bg-[#FFC300] hover:text-[#333333]"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (overlay + drawer) */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        resourcesOpen={resourcesOpen}
        onToggleResources={toggleResourcesMobile}
      />
    </>
  );
};

export default Navbar;