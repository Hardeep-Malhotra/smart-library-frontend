import React from "react";
import { Book } from "@/types";

const BookList = ({ book }: { book: Book[] }) => {
  return (
    <div>
      {book.map((item) => (
        <h1 key={item._id}>{item.title}</h1>
      ))}
    </div>
  );
};

export default BookList;
