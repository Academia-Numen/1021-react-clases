import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function Navbar () {
    const { books } = useContext(BookContext);

    return (
        <div>
            <h1>Reading List</h1>
            <p>Hoy, tu tienes {books.length} libros por leer</p>
        </div>
    )
}

export default Navbar;