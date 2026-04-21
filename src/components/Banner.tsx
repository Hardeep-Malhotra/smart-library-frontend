import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6">
      <div
        className="
          relative
          w-full sm:w-[90%] md:w-[70%]
          mx-auto
          h-[260px] sm:h-[300px] md:h-[320px]
          rounded-2xl
          overflow-hidden
          shadow-lg
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
            left-5
            sm:left-8
            md:left-12
            top-6
            sm:top-1/2
            md:top-1/2
            sm:-translate-y-1/2
            max-w-[52%]
            sm:max-w-[60%]
          "
        >
          <h2
            className="
              text-white
              font-bold
              text-2xl
              sm:text-4xl
              md:text-5xl
              leading-tight
            "
          >
            Connect, Share and Trade Your Favourite Reads...
          </h2>
        </div>

        {/* Book Image */}
        <div
          className="
            absolute
            right-2
            sm:right-6
            md:right-10
            bottom-0
            z-20
          "
        >
          <Image
            src="/book.png"
            alt="book"
            width={280}
            height={280}
            className="
              w-[150px]
              sm:w-[190px]
              md:w-[250px]
              h-[220px]
              object-contain
              -mb-4
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
