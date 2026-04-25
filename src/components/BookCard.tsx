// BookCard.tsx
import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-4 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex items-center gap-4 h-full">
        {/* Aspect Ratio Box for Book Cover */}
        <div className="relative w-[100px] flex-shrink-0 aspect-[2/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src={book.coverImageUrl}
            alt={book.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1 min-w-0 h-full py-1">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#ce7041] opacity-70 mb-1 block">
              Literature
            </span>
            <h2 className="text-base md:text-lg font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-[#ce7041] transition-colors">
              {book.title}
            </h2>
            <p className="text-xs md:text-sm font-medium text-slate-500 mt-1 italic">
              by {book.author?.name || "Unknown Author"}
            </p>
          </div>

          <Link
            href={`/book/${book._id}`}
            className="mt-3 flex items-center justify-center gap-2 w-full py-2 text-xs font-bold rounded-lg bg-[#ce7041] text-white hover:bg-[#b35e35] transition-all shadow-md shadow-[#ce7041]/20"
          >
            Read Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
