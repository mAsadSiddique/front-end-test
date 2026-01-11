"use client";

import { useState } from "react";
import Image from "next/image";
import { SLIDER_DATA } from "@/src/constants/slider-data";



export default function Home() {
  const [selectedCard, setSelectedCard] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const selectedCardData = SLIDER_DATA.find((card) => card.id === selectedCard) || SLIDER_DATA[0];

  return (
    <div
      className="flex min-h-screen flex-col font-sans"
      style={{ background: 'linear-gradient(180deg, #070911 0%, #0D1018 100%)' }}
    >
      {/* Main content area - Center section with selected card content and image */}
      <main className="flex-1 flex items-center justify-center px-16 pt-12">
        <div className="flex items-center justify-center gap-6">
          {/* Left side - Faction selection content */}
          <div className="flex flex-col justify-center max-w-92.5">
            {/* Title Section */}
            <div className="mb-4">
              <h1 className="text-4xl text-left font-thin text-white/80 mb-2 uppercase tracking-wider" style={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }}>
                CHOOSE YOUR
              </h1>
              <h2
                className="text-4xl font-bold text-white mb-1 uppercase tracking-wider text-left"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.1), 0 0 50px rgba(255,255,255,0.1)',
                  letterSpacing: '0.3em'
                }}
              >
                FACTION
              </h2>
            </div>

            {/* Main Description Block */}
            <p className="text-base text-zinc-300 leading-relaxed mb-6 text-left">
              Agents will be customizable, allowing you to select from among the various factions in the game - will you fight for a global police force seeking to enact a new brand of justice? Or will you battle alongside a secret network of deviants and outcasts?
            </p>

            {/* Secondary Description Block */}
            <p className="text-base text-zinc-300 leading-relaxed mb-8 text-left">
              Once you acquire your agent, the choice is yours. Pledging your allegiance is no small decision - as your agent accrues Loyalty Points over time, your choices truly matter.
            </p>

            {/* UTILITY Button */}
            <button
              className="relative w-fit px-8 py-3 bg-white text-zinc-500 uppercase tracking-wider text-sm font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 12px) 100%, 0 100%)'
              }}
            >
              UTILITY
            </button>
          </div>

          {/* Right side - Main image with curtain effect */}
          <div className="flex items-center justify-center">
            <div
              className="w-150 h-150 relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* In image - background layer */}
              <Image
                src={selectedCardData.inImage}
                alt={selectedCardData.title}
                fill
                className="object-contain z-0"
              />

              {/* Curtain boxes - Left side */}
              <div className="absolute inset-y-0 left-0 w-1/2 z-10 flex flex-col pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`left-${i}`}
                    className="flex-1 transition-transform duration-500 ease-in-out"
                    style={{
                      background: 'linear-gradient(180deg, #070911 0%, #0D1018 100%)',
                      transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>

              {/* Curtain boxes - Right side */}
              <div className="absolute inset-y-0 right-0 w-1/2 z-10 flex flex-col pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`right-${i}`}
                    className="flex-1 transition-transform duration-500 ease-in-out"
                    style={{
                      background: 'linear-gradient(180deg, #070911 0%, #0D1018 100%)',
                      transform: isHovered ? 'translateX(100%)' : 'translateX(0)',
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>

              {/* Cover image - on top of curtains */}
              <Image
                src={selectedCardData.coverImage}
                alt={selectedCardData.title}
                fill
                className={`object-contain z-20 transition-opacity duration-1500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Horizontal Slider at the bottom */}
      <div
        className="w-full pb-12 border-zinc-700"
      // style={{ background: 'linear-gradient(180deg, #070911 0%, #0D1018 100%)' }}
      >
        <div className="overflow-x-auto scrollbar-hide overflow-y-visible">
          <div className="flex gap-0 pt-8 pb-4 min-w-max items-start">
            {SLIDER_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item.id)}
                className={`shrink-0 w-72 h-65 border p-8 flex flex-col items-start justify-start cursor-pointer transition-all duration-300 ease-in-out relative ${selectedCard === item.id
                  ? "bg-[#12151C] border-zinc-600/60 scale-110 z-50"
                  : "bg-[#060814] border-zinc-700/30 hover:border-zinc-700/50 hover:scale-105 hover:z-10 z-0"
                  }`}
              >
                {/* Title and Description */}
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-white mb-1 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>

                {/* SVG in the center */}
                <div className="flex-1 flex items-center justify-center w-full">
                  <div className="w-25 h-25 flex items-center justify-center">
                    <img
                      src={item.svg}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}