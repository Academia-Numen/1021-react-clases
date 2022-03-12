
function App() {

  const lista = [
    { id: 1, nombre: 'Zapatos', precio: 10000 },
    { id: 2, nombre: 'Zapatillas Deportivas', precio: 15000 },
    { id: 3, nombre: 'Botas', precio: 12000 },
    { id: 4, nombre: 'Tacos', precio: 10000 },
    { id: 5, nombre: 'Pantuflas', precio: 3000 }
  ]

  const estilosDeApp = {
    ul: {
      listStyle: 'none'
    },
    li: { fontWeight: '600', marginBottom: '1rem' }
  }

  return (
    <>
      <h1>Lista de Calzados</h1>
      <ul style={estilosDeApp.ul}>
        <li style={estilosDeApp.li}>Nombre y Precio de nuestro productos</li>
        {
          lista.map(zapato => {
            return (<li key={zapato.id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
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
