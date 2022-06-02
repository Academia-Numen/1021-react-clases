import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ACTIONS } from "../reducers/bookReducer";

function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext);

    return (
        <li style={{ padding: '1rem' }} onClick={() => dispatch({ type: ACTIONS.REMOVE_BOOK, payload: book.id })}>
            <div>Libro: <span style={{fontStyle: 'italic'}}>{book.title}</span></div>
            <div>Autor: <span style={{fontStyle: 'italic'}}>{book.author}</span></div>
        </li>
    )
}

export default BookDetails;