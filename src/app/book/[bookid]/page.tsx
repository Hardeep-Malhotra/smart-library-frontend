import React from "react";
import Image from "next/image";
import { Book } from "@/types";
import DownloadButton from "../components/DownloadButton";
import Link from "next/link";
import { BookOpen, Languages, ShieldCheck, Star } from "lucide-react"; // Assuming Lucide-react for icons

const SingleBookPage = async ({
  params,
}: {
  params: Promise<{ bookid: string }>;
}) => {
  const { bookid: bookId } = await params;

  let book: Book | null = null;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/books/${bookId}`,
      { cache: "no-store" },
    );

    if (!response.ok) throw new Error("Server response was not OK");

    const result = await response.json();
    book = result.book || result.data || result;
  } catch (err) {
    console.error("Fetch Error:", err);
  }

  if (!book || !book.title) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-red-50 blur-xl" />
          <span className="relative text-8xl">🕵️‍♂️</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Book not found
        </h1>
        <p className="max-w-md text-lg text-gray-500">
          {
            "The literary treasure you're seeking seems to have vanished from ourshelves."
          }
        </p>
        <a
          href="/books"
          className="rounded-full bg-gray-900 px-8 py-3 font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
        >
          Browse Catalog
        </a>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50/50 selection:bg-primary-100">
      {/* Dynamic Background: Blurred gradient spot */}
      <div className="absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary-100/50 blur-[100px]" />
      <div className="absolute top-1/2 -right-24 -z-10 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px]" />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Book Cover - Order 1 on mobile, 2 on Desktop (Sticky) */}
          <div className="order-1 lg:sticky lg:top-24 lg:col-span-5 xl:col-span-4">
            <div className="group relative mx-auto w-full max-w-[400px]">
              {/* Complex Shadow Stack for realism */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-primary-500/20 to-blue-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {book.coverImageUrl ? (
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] ring-1 ring-gray-200/50 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <Image
                    src={book.coverImageUrl}
                    alt={book.title}
                    width={600}
                    height={800}
                    priority
                    unoptimized
                    className="aspect-[3/4] w-full object-cover transition-all group-hover:contrast-[1.02]"
                  />
                </div>
              ) : (
                <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white shadow-inner">
                  <BookOpen className="mb-4 h-12 w-12 text-gray-300" />
                  <span className="font-medium text-gray-400">
                    No Cover Available
                  </span>
                </div>
              )}

              {/* Stats Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200/60 bg-white/50 p-4 backdrop-blur-sm transition-colors hover:bg-white">
                  <div className="mb-1 flex items-center gap-2 text-gray-400">
                    <Languages size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Language
                    </span>
                  </div>
                  <p className="font-bold text-gray-900">English</p>
                </div>
                <div className="rounded-2xl border border-gray-200/60 bg-white/50 p-4 backdrop-blur-sm transition-colors hover:bg-white">
                  <div className="mb-1 flex items-center gap-2 text-gray-400">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Rating
                    </span>
                  </div>
                  <p className="font-bold text-gray-900">4.8 / 5.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="order-2 lg:col-span-7 xl:col-span-8">
            <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-400">
              <Link
                href="/"
                className="hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 truncate">{book.title}</span>
            </nav>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700 ring-1 ring-inset ring-primary-700/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              </span>
              Digital Edition Available
            </div>

            <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              {book.title}
            </h1>

            <div className="mb-10 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-bold text-gray-800">
                  {book.author?.name?.charAt(0) || "U"}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Published Author
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {book.author?.name || "Unknown Author"}
                </p>
              </div>
            </div>

            <div className="prose prose-slate prose-lg mb-12 max-w-none">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="m-0 text-xl font-bold text-gray-900">
                  Synopsis
                </h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <p className="leading-relaxed text-gray-600">
                {book.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 shadow-2xl md:p-12">
              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-10 [mask-image:linear-gradient(white,transparent)]"
                style={{
                  backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="text-center md:text-left">
                  <h4 className="mb-2 text-2xl font-bold text-white">
                    Get your copy today
                  </h4>
                  <p className="text-gray-400">
                    Download includes PDF, EPUB, and Kindle formats.
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  <DownloadButton fileLink={book.file} />
                </div>
              </div>

              <div className="relative mt-8 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8 md:justify-start">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <ShieldCheck size={16} className="text-green-400" />
                  Verified Content
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <ShieldCheck size={16} className="text-green-400" />
                  No Ads or Popups
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleBookPage;
