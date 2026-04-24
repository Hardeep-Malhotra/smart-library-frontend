export type Author = {
  _id?: string;
  name: string;
};

export type Book = {
  _id: string;
  title: string;
  slug?: string;
  description: string;
  author: Author;

  genre:
    | "Fiction"
    | "Non-Fiction"
    | "Education"
    | "Programming"
    | "Science Fiction"
    | "Fantasy"
    | "Biography"
    | "History"
    | "Children"
    | "Other";

  coverImageUrl: string;
  file: string;

  createdAt?: string;
  updatedAt?: string;
};
