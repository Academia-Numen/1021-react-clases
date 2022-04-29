import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { ThemeContext } from "../contexts/ThemeContext";

function BookList() {

    const { themeStyles } = useContext(ThemeContext);
    const books = useContext(BooksContext);

    return (
        <div className="book-list" style={themeStyles}>
            <h2>Lista de Libros</h2>
            <ul>
                { books.map(book => <li key={book.id}> {book.title} </li>) }
            </ul>
        </div>
    )
}

export default BookList;