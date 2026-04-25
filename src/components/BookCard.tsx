import React from "react";
import { Book } from "@/types";
import Image from "next/image";

function BookCard({ book }: { book: Book }) {
  return (
    <div>
      <Image
        src={book.coverImageUrl}
        alt={book.title}
        width={200}
        height={300}
      />
    </div>
  );
}

export default BookCard;
