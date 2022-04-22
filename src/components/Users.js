import useAxios from "../hooks/useAxios";

function Users() {

    const { data, error, isLoading } = useAxios('https://jsonplaceholder.typicode.com/users');

    return (
        <ul>
            <li><h2>Usuarios</h2></li>
            {
                isLoading ? <li>Cargando...</li> :

                    error.isError ? <li>Hubo un error: {error.message}</li> :

                        data.map(user => {
                            return (
                                <li key={user.id}>{user.name} --- {user.email}</li>
                            )
                        })
            }
        </ul>
    )
}

export default Users;