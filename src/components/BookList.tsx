// BookList.tsx

import React from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";

const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/books`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const data = await response.json();
  const books = data.books;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: Book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
