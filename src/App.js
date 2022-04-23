import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BooksContextProvider from "./contexts/BooksContext";

function App() {

  return (
    <div className="App">

      <BooksContextProvider>

        <Navbar />
        <div>
          <div>
            <BookList />
          </div>
        </div>

      </BooksContextProvider>

    </div>
  )
}

export default App;