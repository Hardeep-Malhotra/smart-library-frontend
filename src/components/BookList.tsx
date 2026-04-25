import React from "react";
import { Book } from "@/types";
import BookCard from "./BookCard";

const BookList = ({ book }: { book: Book[] }) => {
  return (
    <div>
      {book.map((item) => (
        <BookCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BookList;
