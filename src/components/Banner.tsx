import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10">
      <div className="relative w-[90%] mx-auto h-[220px] sm:h-[280px] md:h-[300px] rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/paper-bg.jpg"
          alt="banner background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Right Side Book Image */}
        <Image
          src="/book.png"
          alt="book"
          width={250}
          height={250}
          className="absolute bottom-0 right-2 sm:right-6 md:right-8 z-20 
                     h-[130px] sm:h-[180px] md:h-[220px] w-auto"
        />

        {/* Text */}
        <h3
          className="absolute left-4 sm:left-8 md:left-10 top-1/2 z-20 
                     max-w-[70%] sm:max-w-xl md:max-w-2xl 
                     -translate-y-1/2 text-white 
                     text-xl sm:text-3xl md:text-5xl 
                     font-bold leading-snug md:leading-tight"
        >
          Connect, Share and Trade Your Favourite Reads...
        </h3>
      </div>
    </div>
  );
};

export default Banner;
