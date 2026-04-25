"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a shadow when user scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 shadow-sm border-gray-200"
          : "bg-white/70 border-transparent"
      } backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link href="/">
          <div className="group flex cursor-pointer items-center gap-3">
            <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
              <Hexagon />
              <BookIcon />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-black uppercase tracking-tighter text-gray-900">
                Smart<span className="text-[#ce7041]">Library</span>
              </span>
              <span className="text-[10px] font-medium text-gray-500 tracking-[0.2em] uppercase">
                Digital Archive
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation & Search */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-6 text-sm font-semibold text-gray-600">
            <Link
              href="/books"
              className="hover:text-[#ce7041] transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="hover:text-[#ce7041] transition-colors"
            >
              About
            </Link>
          </div>
          <div className="h-6 w-[1px] bg-gray-200" /> {/* Divider */}
          <div className="flex items-center gap-3">
            <button className="h-10 rounded-xl px-5 text-sm font-bold text-gray-700 transition hover:text-[#ce7041]">
              Sign in
            </button>
            <button className="h-10 rounded-xl bg-[#ce7041] px-6 text-sm font-bold text-white shadow-lg shadow-[#ce7041]/20 transition-all hover:bg-[#b65f35] hover:shadow-[#ce7041]/40 active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-gray-50 md:hidden"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center">
            <span
              className={`h-0.5 w-5 bg-gray-800 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-800 transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-800 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 p-6">
          <Link href="/books" className="text-lg font-semibold text-gray-800">
            Explore Books
          </Link>
          <Link href="/about" className="text-lg font-semibold text-gray-800">
            Community
          </Link>
          <hr className="my-2" />
          <button className="h-12 w-full rounded-xl border-2 border-[#ce7041] font-bold text-[#ce7041]">
            Sign in
          </button>
          <button className="h-12 w-full rounded-xl bg-[#ce7041] font-bold text-white shadow-lg">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* ================= UPDATED ICONS ================= */

const Hexagon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z"
      fill="#ce7041"
      className="drop-shadow-sm"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="white"
    className="absolute h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);
