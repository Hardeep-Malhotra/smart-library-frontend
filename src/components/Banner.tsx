// Banner.tsx (Server Component)
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-8">
      <div className="relative w-full max-w-6xl mx-auto h-[220px] sm:h-[300px] md:h-[360px] rounded-[2rem] overflow-hidden shadow-2xl group">
        <Image
          src="/paper-bg.jpg"
          alt="banner background"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

        <div className="absolute z-20 left-6 sm:left-12 md:left-16 top-1/2 -translate-y-1/2 max-w-[65%] sm:max-w-[55%]">
          <h2 className="text-white font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] drop-shadow-lg tracking-tight">
            Connect, Share <br className="hidden sm:block" />
            <span className="text-[#f3d0b9]">and Trade</span> <br />
            Your Favourite Reads...
          </h2>
        </div>

        {/* This div now uses the animation from tailwind.config */}
        <div className="absolute right-0 sm:right-6 md:right-12 bottom-0 z-20 pointer-events-none animate-float">
          <Image
            src="/book.png"
            alt="book"
            width={350}
            height={350}
            className="w-[140px] sm:w-[220px] md:w-[300px] lg:w-[350px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
