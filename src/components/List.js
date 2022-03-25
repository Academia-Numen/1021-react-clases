
const List = ({ titulo, lista }) => {

    

    const estilosDeApp = {
        ul: {
            listStyle: 'none'
        },
        li: { fontWeight: '600', marginBottom: '1rem' }
    }

    return (
        <ul style={estilosDeApp.ul}>
            <li style={estilosDeApp.li}>{titulo}</li>
            {
                lista.map(item => {
                    return (
                        <li
                            key={item.id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
                            <span>{item.nombre}</span>
                            <span>{item.precio}</span>
                        </li>)
                })
            }
        </ul>
    )
}

export default List;