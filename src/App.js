import axios from "axios";
import { useEffect, useState } from "react";

const optionsData = [
  { value: "Arabia Saudita", label: "Arabia Saudita" },
  { value: "Mexico", label: "Mexico" },
  { value: "Polonia", label: "Polonia" },
]

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState({
    isError: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const [optionValue, setOptionValue] = useState('');
  const [indexMatch, setIndexMatch] = useState(-1);

  async function getData() {
    setLoading(true);
    try {
      const res = await axios('http://localhost:8000/team');
      setData(res.data);
    } catch (err) {
      setError({
        isError: true,
        message: err.message || "Hubo un error"
      })
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500)
    }
  }

  useEffect(() => {
    getData()
  }, []); // Solamente se ejecuta despues de onMount (primera rederizacion)

  function selectHandler(e) {
    setOptionValue(e.target.value)
  }

  useEffect(() => {
    const newIndex = optionValue === optionsData[0].value ? 0 :
      optionValue === optionsData[1].value ? 1 :
        optionValue === optionsData[2].value ? 2 : -1;
    setIndexMatch(newIndex);
  }, [optionValue])

  return (
    <div>
      <h1>Seleccion Argentina</h1>

      <label htmlFor="matches">Selecciona un Rival:</label>
      <select name="matches" id="matches" onChange={selectHandler} defaultValue="">
        <option value="" disabled>Selecciones:</option>
        {
          optionsData.map((option, index) => {
            return <option key={index} value={option.value}>
              {option.label}
            </option>
          })
        }
      </select>

      <ul>
        <li><h2>Partidos Fase de Grupos:</h2></li>
        {
          loading ? <div>Cargando peticion...</div> :

            error.isError ? <div style={{ background: 'red', padding: 20 }}>Hubo un error: {error.message}</div> :

              data.length === 0 ? null :

                data.matches.map((item, index) => {
                  return (
                    <li key={index} style={{ background: index === indexMatch ? 'yellow' : '' }}>
                      <span>Partido: {item.match}</span>
                      <span>Fecha: {item.date}</span>
                      <span>Dia: {item.day}</span>
                      <span>Hora: {item.time}</span>
                      <span>Rival: {item.rival}</span>
                      <span>Estadio: {item.stadium}</span>
                    </li>
                  )
                })
        }
      </ul>
    </div>
  )
}

export default App;