import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

function BookList() {

  const { books } = useContext(BookContext);

  return (
    <div>
      <ul>
        {books.map(book => <BookDetails book={book} />)}
      </ul>
    </div>
  )
}

export default BookList;