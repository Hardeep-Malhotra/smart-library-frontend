"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Hexagon />
              <BookIcon />
            </div>

            <span className="text-lg font-semibold uppercase tracking-wide text-gray-800 group-hover:text-[#ce7041] transition">
              Smart Library
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-3">
          <button className="h-10 rounded-lg border border-[#ce7041] px-5 text-sm font-medium text-[#ce7041] hover:bg-[#fcf6f0] transition">
            Sign in
          </button>

          <button className="h-10 rounded-lg bg-[#ce7041] px-5 text-sm font-medium text-white shadow-md hover:bg-[#b65f35] active:scale-95 transition">
            Sign up
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center"
        >
          <MenuIcon />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 py-4 bg-white border-t shadow-sm">
          <div className="flex flex-col gap-4">
            <button className="w-full h-11 rounded-xl border border-[#ce7041] text-[#ce7041] font-medium tracking-wide hover:bg-[#fcf6f0] transition">
              Sign in
            </button>

            <button className="w-full h-11 rounded-xl bg-[#ce7041] text-white font-medium tracking-wide shadow-md hover:bg-[#b65f35] active:scale-[0.98] transition-all duration-200">
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
