
const List = (props) => {

    const estilosDeApp = {
        ul: {
            listStyle: 'none'
        },
        li: { fontWeight: '600', marginBottom: '1rem' }
    }

    return (
        <ul style={estilosDeApp.ul}>
            <li style={estilosDeApp.li}>{props.titulo}</li>
            {
                props.lista.map(zapato => {
                    return (
                        <li key={zapato.id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
                            <span>{zapato.nombre}</span>
                            <span>{zapato.precio}</span>
                        </li>)
                })
            }
        </ul>
    )
}

export default List;