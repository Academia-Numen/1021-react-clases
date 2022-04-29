import { createContext, useState } from "react";

export const BooksContext = createContext();

function BooksContextProvider({ children }) {

  const [books, setBooks] = useState([
    { id: 1, title: 'Harry Potter' },
    { id: 2, title: '1984' },
    { id: 3, title: 'Rebelion en la Granja' },
    { id: 4, title: '100 Años de Soledad' },
    { id: 5, title: 'Martin Fierro' },
  ])

  return (
    <BooksContext.Provider value={books}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;