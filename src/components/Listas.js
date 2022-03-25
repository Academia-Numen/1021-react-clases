import List from '../components/List';

function Listas() {

    const calzados = [
      { id: 1, nombre: 'Zapatos', precio: 10000 },
      { id: 2, nombre: 'Zapatillas Deportivas', precio: 15000 },
      { id: 3, nombre: 'Botas', precio: 12000 },
      { id: 4, nombre: 'Tacos', precio: 10000 },
      { id: 5, nombre: 'Pantuflas', precio: 3000 }
    ]
  
    const electrodomesticosPreGuerra = [
      { id: 1, nombre: 'Heladera', precio: 100000 },
      { id: 2, nombre: 'Cocina', precio: 45000 },
      { id: 3, nombre: 'Batidora', precio: 5000 },
      { id: 4, nombre: 'Microondas', precio: 10000 },
      { id: 5, nombre: 'Lavarropa', precio: 60000 }
    ]
  
    const electrodomesticosPosGuerra = [
      { id: 1, nombre: 'Heladera', precio: 10000 },
      { id: 2, nombre: 'Cocina', precio: 4500 },
      { id: 3, nombre: 'Batidora', precio: 500 },
      { id: 4, nombre: 'Microondas', precio: 1000 },
      { id: 5, nombre: 'Lavarropa', precio: 6000 }
    ]
  
    return (
      <div>
          <List lista={calzados} titulo="Lista De Calzados" />
          <List lista={electrodomesticosPreGuerra} titulo="Lista De Electrodomésticos Pre-guerra" />
          <List lista={electrodomesticosPosGuerra} titulo="Lista De Electrodomésticos Pos-guerra" />
      </div>
    );
}
export default Listas;