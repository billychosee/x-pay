// src/components/navbar/config.ts

export const BRAND = {
  name: "X Pay",
  logo: "/X-Pay-Logo.png", // adjust to your actual path or import
};

type NavLink = {
  label: string;
  href?: string;

};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Features", href: "/features" },
  { label: "Documentation", href: "https://docs.x-pay.co.za/" },
  { label: "Resources" },
  { label: "Contact Us", href: "/contact-us" },
];