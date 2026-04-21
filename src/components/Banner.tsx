import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full py-6 px-4 sm:px-6 md:px-10">
      <div
        className="
          relative
          w-full sm:w-[85%] md:w-[65%]
          mx-auto
           h-[180px] sm:h-[230px] md:h-[280px]
          rounded-xl
          overflow-hidden
        "
      >
        {/* Background Image */}
        <Image
          src="/paper-bg.jpg"
          alt="banner background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Text Section */}
        <div
          className="
            absolute
            z-20
            left-4 sm:left-8 md:left-10
            top-1/2
            -translate-y-1/2
            max-w-[55%] sm:max-w-[50%]
          "
        >
          <h2
            className="
              text-white
              font-bold
              text-lg sm:text-3xl md:text-5xl
              leading-snug
            "
          >
            Connect, Share and Trade Your Favourite Reads...
          </h2>
        </div>

        {/* Book Image */}
        <div
          className="
            absolute
            z-20
            bottom-3 sm:bottom-4 md:bottom-6
            right-3 sm:right-6 md:right-8
          "
        >
          <Image
            src="/book.png"
            alt="book"
            width={280}
            height={280}
            className="
              w-[110px]
              sm:w-[170px]
              md:w-[250px]
              h-auto
              -mb-4
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
