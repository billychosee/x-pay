"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type LogoItem = {
  logo: string;
  url: string;
};

export default function LogoSlider({ logos }: { logos: LogoItem[] }) {
  // Create extended arrays for seamless looping
  const extendedLogos = [...logos, ...logos, ...logos, ...logos];
  
  // Generate random starting positions for each row
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setRandomStartPositions = () => {
      if (row1Ref.current && row2Ref.current && row3Ref.current) {
        // Calculate random starting positions (between 0% and 50%)
        const pos1 = Math.random() * 50;
        const pos2 = Math.random() * 50;
        const pos3 = Math.random() * 50;
        
        // Apply the positions as custom properties
        row1Ref.current.style.setProperty('--start-pos', `${pos1}%`);
        row2Ref.current.style.setProperty('--start-pos', `${pos2}%`);
        row3Ref.current.style.setProperty('--start-pos', `${pos3}%`);
      }
    };

    setRandomStartPositions();
  }, []);

  return (
    <div className="w-full py-12 space-y-6 overflow-hidden">
      {/* Row 1 - Slides right (slow) */}
      <div 
        ref={row1Ref}
        className="flex gap-8 w-max animate-slide-right-slow"
        style={{ transform: 'translateX(var(--start-pos, 0))' }}
      >
        {extendedLogos.map((item, i) => (
          <HexagonLogo key={`right-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function HexagonLogo({ item }: { item: LogoItem }) {
  return (
    <div className="flex items-center justify-center w-24 p-2 transition-transform duration-300 hexagon-mask h-28 hover:scale-105">
      <Link href={item.url} className="flex items-center justify-center w-full h-full">
        <img
          src={item.logo}
          alt="Business Logo"
          width={60}
          height={60}
          className="object-contain w-16 h-auto max-h-16"
          loading="lazy"
        />
      </Link>
    </div>
  );
}