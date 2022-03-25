import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Listas from "./components/Listas";
import Main from "./components/Main";
import PropagationExample from "./components/PropagationExample";

function App() {

  const [title, setTitle] = useState('Título');

  return (
    <div>
      <h1>{title}</h1>
      <Main>
        <Header />
        <Form />
        <PropagationExample />
        <Listas />
      </Main>
    </div>
  );
}

export default App;