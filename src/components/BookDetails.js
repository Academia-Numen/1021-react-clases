function BookDetails({ book }) {

    return (
        <li style={{ padding: '1rem' }}>
            <div>Libro: <span style={{fontStyle: 'italic'}}>{book.title}</span></div>
            <div>Autor: <span style={{fontStyle: 'italic'}}>{book.author}</span></div>
        </li>
    )
}

export default BookDetails;