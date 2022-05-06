import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { ACTIONS } from "../reducers/bookReducer";

function NewBookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const { books, dispatch } = useContext(BookContext);

    function generateId(books) {
        const id = Math.max(0, ...books.map(book => book.id)) + 1;
        return id;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = { id: generateId(books), title, author };

        dispatch({ type: ACTIONS.ADD_BOOK, payload: newBook });

        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Titulo del Libro" value={title}
                required onChange={(e) => setTitle(e.target.value)} />

            <input type="text" placeholder="Autor del Libro" value={author}
                required onChange={(e) => setAuthor(e.target.value)} />

            <input type="submit" value='Añadir Libro' />

        </form>
    )
}

export default NewBookForm;