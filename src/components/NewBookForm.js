import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

function NewBookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { setBooks } = useContext(BookContext);

    function handleSubmit(e) {
        e.preventDefault();
        const newBook = { id: 6, title, author };
        setBooks(prevState => [...prevState, newBook]);
        setTitle('');
        setAuthor('');
    }

    // ID DINAMICO
    // MANEGAR ESTADO CON REDUCER
    // AGREGAR UN CUSTOM HOOK
    // GUARDAR LA INFO EN LOCAL STORAGE

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