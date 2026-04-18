"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="group flex cursor-pointer items-center gap-2">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Hexagon />
              <BookIcon />
            </div>

            <span className="text-xl font-bold uppercase tracking-wide text-gray-800 transition group-hover:text-[#ce7041]">
              Smart Library
            </span>
          </div>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="h-10 rounded-xl border border-[#ce7041] px-5 text-sm font-medium text-[#ce7041] transition hover:bg-[#fcf6f0]">
            Sign in
          </button>

          <button className="h-10 rounded-xl bg-[#ce7041] px-5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#b65f35] active:scale-95">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-6 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-4">
            <button className="h-11 w-full rounded-xl border border-[#ce7041] font-medium text-[#ce7041] transition hover:bg-[#fcf6f0]">
              Sign in
            </button>

            <button className="h-11 w-full rounded-xl bg-[#ce7041] font-medium text-white shadow-md transition-all duration-200 hover:bg-[#b65f35] active:scale-[0.98]">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* ================= ICONS ================= */

const Hexagon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="#ce7041"
    stroke="#ce7041"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#ce7041"
    className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-800"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
