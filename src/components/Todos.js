import useAxios from "../hooks/useAxios";

function Todos() {

  const { data, error, isLoading } = useAxios('https://jsonplaceholder.typicode.com/todos');

  return (
    <ul>
      <li><h2>Tareas</h2></li>

      {
        isLoading ? <li>Cargando...</li> :

          error.isError ? <li>Hubo un error: {error.message}</li> :

            data.map(todo => {
              return (
                <li key={todo.id}>{todo.title} --- {todo.completed ? 'Terminado' : 'En progreso'}</li>
              )
            })
      }
    </ul>
  )
}

export default Todos;