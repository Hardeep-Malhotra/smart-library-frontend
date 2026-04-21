import Banner from "../components/Banner";
import BookList from "../components/BookList";

export default async function Home() {
  let book = [];

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/books`);

    console.log("Status Code:", response.status);

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`);
    }

    book = await response.json();

    console.log(book);
  } catch (error) {
    console.log("Fetch Error:", error);
  }

  console.log(book);

  return (
    <>
      <Banner />
      <BookList />
    </>
  );
}
