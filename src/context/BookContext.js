import { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider ({ children }) {

    const [books, setBooks] = useState([
        { id: 1, title: 'Harry Potter', author: 'J. K. Rowling' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'Rebelion en la Granja', author: 'George Orwell' },
        { id: 4, title: '100 Años de Soledad', author: 'Gabriel Garcia Marquez' },
        { id: 5, title: 'Martin Fierro', author: 'José Hernández' },
      ])

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            { children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;