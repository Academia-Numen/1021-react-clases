import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import bookReducer from "../reducers/bookReducer";

const libros = [
    { id: 1, title: 'Harry Potter', author: 'J. K. Rowling' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Rebelion en la Granja', author: 'George Orwell' },
    { id: 4, title: '100 Años de Soledad', author: 'Gabriel Garcia Marquez' },
    { id: 5, title: 'Martin Fierro', author: 'José Hernández' },
]

export const BookContext = createContext();

function BookContextProvider({ children }) {

    const [books, dispatch] = useLocalStorage('books', libros, bookReducer);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;