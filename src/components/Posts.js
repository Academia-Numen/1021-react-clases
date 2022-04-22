import useAxios from "../hooks/useAxios";

function Posts() {

    const { data, error, isLoading } = useAxios('https://jsonplaceholder.typicode.com/posts');

    return (
        <ul>
            <li><h2>Posts</h2></li>

            {
                isLoading ? <li>Cargando...</li> :

                    error.isError ? <li>Hubo un error: {error.message}</li> :

                        data.map(post => {
                            return (
                                <li key={post.id}>{post.title}</li>
                            )
                        })
            }
        </ul>
    )
}

export default Posts;