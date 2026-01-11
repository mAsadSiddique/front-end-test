"use client";

import { useState } from "react";
import Image from "next/image";

// Faction data for the slider cards
const sliderData = [
  {
    id: 1,
    title: "SENTINELS",
    description: "A global peacekeeping force for the public good.",
    svg: "/logos/1.svg",
    coverImage: "/main-images/1-cover.png",
    inImage: "/main-images/1-in.png",
  },
  {
    id: 2,
    title: "THE CELESTE GROUP",
    description: "An elite organization of strategic operatives.",
    svg: "/logos/2.svg",
    coverImage: "/main-images/2-cover.png",
    inImage: "/main-images/2-in.png",
  },
  {
    id: 3,
    title: "OX898",
    description: "A rag-tag group of dissidents and extremists, with the cause of freedom of information and equality.",
    svg: "/logos/3.svg",
    coverImage: "/main-images/3-cover.png",
    inImage: "/main-images/3-in.png",
  },
  {
    id: 4,
    title: "PATRIOTS DIVISION",
    description: "An American security company specializing in arms manufacturing.",
    svg: "/logos/4.svg",
    coverImage: "/main-images/4-cover.png",
    inImage: "/main-images/4-in.png",
  },
  {
    id: 5,
    title: "LEBENSKRAFT ARMORERS",
    description: "A global materials science firm that develops next-generation robots.",
    svg: "/logos/5.svg",
    coverImage: "/main-images/5-cover.png",
    inImage: "/main-images/5-in.png",
  },
  {
    id: 6,
    title: "SANZU BIOMEDICAL",
    description: "A triumvirate of leading organizations in technology, science, and government.",
    svg: "/logos/6.svg",
    coverImage: "/main-images/6-cover.png",
    inImage: "/main-images/6-in.png",
  },
  {
    id: 7,
    title: "JUNPEI LIGHT & POWER",
    description: "Asia's largest energy multinational and specialist in fusion technology.",
    svg: "/logos/7.svg",
    coverImage: "/main-images/7-cover.png",
    inImage: "/main-images/7-in.png",
  },
  {
    id: 8,
    title: "DEADEYE ENFORCERS",
    description: "A global network composed of ex-NATO members.",
    svg: "/logos/8.svg",
    coverImage: "/main-images/8-cover.png",
    inImage: "/main-images/8-in.png",
  },
  {
    id: 9,
    title: "THE ORDER",
    description: "Maintaining balance through structure.",
    svg: "/logos/9.svg",
    coverImage: "/main-images/9-cover.png",
    inImage: "/main-images/9-in.png",
  },
];

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(1);

  const selectedCardData = sliderData.find((card) => card.id === selectedCard) || sliderData[0];

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      {/* Main content area - Center section with selected card content and image */}
      <main className="flex-1 flex items-center justify-center px-16 pt-12">
        <div className="flex items-center justify-center gap-6">
          {/* Left side - Faction selection content */}
          <div className="flex flex-col justify-center max-w-2xs">
            {/* Title Section */}
            <div className="mb-4">
              <h1 className="text-4xl text-left font-thin text-white/80 mb-2 uppercase tracking-wider" style={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }}>
                CHOOSE YOUR
              </h1>
              <h2
                className="text-4xl font-bold text-white mb-1 uppercase tracking-wider text-left"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.1), 0 0 50px rgba(255,255,255,0.1)',
                  letterSpacing: '0.4em'
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
              className="relative w-fit px-8 py-3 bg-white text-zinc-400 uppercase tracking-wider text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 12px) 100%, 0 100%)'
              }}
            >
              UTILITY
            </button>
          </div>

          {/* Right side - Main image */}
          <div className="flex items-center justify-center">
            <div className="w-[600px] h-[600px] relative">
              <Image
                src={selectedCardData.coverImage}
                alt={selectedCardData.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Horizontal Slider at the bottom */}
      <div className="w-full bg-zinc-950 pb-12 border-zinc-700">
        <div className="overflow-x-auto scrollbar-hide overflow-y-visible">
          <div className="flex gap-0 pt-8 pb-4 min-w-max items-start">
            {sliderData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item.id)}
                className={`shrink-0 w-72 h-65 border p-8 flex flex-col items-start justify-start cursor-pointer transition-all duration-300 ease-in-out relative ${selectedCard === item.id
                  ? "bg-zinc-800 border-zinc-600/60 scale-110 z-50"
                  : "bg-zinc-900/40 border-zinc-700/30 hover:border-zinc-700/50 hover:scale-105 hover:z-10 z-0"
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
