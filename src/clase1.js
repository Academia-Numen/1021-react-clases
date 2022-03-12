
function App() {

    const lista = [
      { nombre: 'Zapatos', precio: 10000 },
      { nombre: 'Zapatillas Deportivas', precio: 15000 },
      { nombre: 'Botas', precio: 12000 },
      { nombre: 'Tacos', precio: 10000 },
      { nombre: 'Pantuflas', precio: 3000 }
    ]
  
    return (
      <>
        <h1>Lista de Calzados</h1>
        <ul style={ {listStyle: 'none'} }>
          <li style={ {fontWeight: '600', marginBottom: '1rem'} }>Nombre y Precio de nuestro productos</li>
          {
            lista.map(zapato => {
              return (<li style= { {display: 'flex', justifyContent: 'space-between', maxWidth: '200px'} }>
                  <span>{zapato.nombre}</span>
                  <span>{zapato.precio}</span>
                </li>)
            })
          }
        </ul>
      </>
    );
  }
  
  export default App;