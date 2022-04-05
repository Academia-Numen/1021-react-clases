import { useState } from "react";

function ListItem ({ id, nombre, eliminarItem }) {

  return <li onClick={() => eliminarItem(id)}>{nombre}</li>
}

function App() {
  const [items, setItems] = useState([
    { id: 1, value: 'Regar las plantas' },
    { id: 2, value: 'Salir a correr' },
    { id: 3, value: 'Tomar agua' },
    { id: 4, value: 'Estudiar React' },
  ]);

  function eliminarLista (identificador) {
    const listaFiltrada = items.filter(item => item.id !== identificador);
    setItems(listaFiltrada)
  }

  return (
    <div>
      <ul>
        {
          items.map((item, index) => {
            return(
              <ListItem key={item.id} nombre={item.value} eliminarItem={eliminarLista} id={item.id}/>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;