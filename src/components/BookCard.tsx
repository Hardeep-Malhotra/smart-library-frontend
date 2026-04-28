"use client";
import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpenText, Star, Layers } from "lucide-react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white p-4 transition-all duration-500 hover:border-[#ce7041]/30 hover:shadow-[0_20px_50px_rgba(206,112,65,0.1)]"
    >
      {/* Decorative background element */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#ce7041]/10 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-row items-center gap-6 h-full">
        {/* LEFT SIDE: Enhanced Book Mockup */}
        <div className="relative w-[110px] xs:w-[130px] md:w-[150px] aspect-[2/3] flex-shrink-0 perspective-1000">
          <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:rotate-[-2deg] group-hover:scale-105">
            {/* The "Page Stack" Layer (adds physical depth) */}
            <div className="absolute inset-y-1 -right-1 w-2 rounded-r-lg bg-slate-200 shadow-sm" />

            <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100 shadow-[12px_12px_25px_-5px_rgba(0,0,0,0.15),_0_5px_10px_-5px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
              <Image
                src={book.coverImageUrl}
                alt={book.title}
                fill
                priority
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Professional Lighting Overlays */}
              <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content Section */}
        <div className="flex flex-col flex-1 min-w-0 py-2">
          {/* Header Row */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-[#ce7041]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Premium Edition
              </span>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-slate-200/50">
              <Star size={10} className="fill-yellow-500 text-yellow-500" />
              <span className="text-[10px] font-heavy text-slate-700">4.9</span>
            </div>
          </div>

          {/* Typography Section */}
          <div className="flex-1">
            <h2 className="text-lg sm:text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-800 line-clamp-2 transition-colors duration-300 group-hover:text-slate-900">
              {book.title}
            </h2>
            <p className="mt-1.5 text-sm font-medium text-slate-500/80">
              by{" "}
              <span className="text-slate-700 transition-colors group-hover:text-[#ce7041]">
                {book.author?.name || "Unknown Author"}
              </span>
            </p>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-100/80 px-2.5 py-1 text-[10px] font-bold text-slate-600 backdrop-blur-sm transition-colors group-hover:bg-[#ce7041]/10 group-hover:text-[#ce7041]">
                <Layers size={10} />
                {book.genre || "LITERATURE"}
              </div>
              <div className="rounded-lg bg-slate-100/80 px-2.5 py-1 text-[10px] font-bold text-slate-600 backdrop-blur-sm">
                DIGITAL PDF
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-6">
            <Link href={`/book/${book._id}`}>
              <motion.div
                whileTap={{ scale: 0.96 }}
                className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ce7041] hover:pr-8 hover:shadow-[0_10px_20px_rgba(206,112,65,0.3)]"
              >
                <BookOpenText
                  size={16}
                  className="transition-transform group-hover/btn:rotate-12"
                />
                <span>Explore Book</span>
                <ArrowRight
                  size={16}
                  className="absolute right-3 opacity-0 transition-all duration-300 group-hover/btn:opacity-100"
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
