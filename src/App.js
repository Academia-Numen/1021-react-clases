import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
import BooksContextProvider from "./contexts/BooksContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {

  return (
    <div className="App">

      <ThemeContextProvider>

        <Navbar />

        <BooksContextProvider>
          <div>
            <div>
              <BookList />
            </div>
          </div>
        </BooksContextProvider>

        <ToggleButton />

      </ThemeContextProvider>

    </div>
  )
}

export default App;