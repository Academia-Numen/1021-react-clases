import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

function BookList() {

    const books = useContext(BooksContext);

    return (
        <div className="book-list">
            <h2>Lista de Libros</h2>
            <ul>
                { books.map(book => <li key={book.id}> {book.title} </li>) }
            </ul>
        </div>
    )
}

export default BookList;