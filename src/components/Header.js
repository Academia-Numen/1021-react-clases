
const Header = () => {

    const navigationBar = [
        { id: 1, section: 'Home' },
        { id: 2, section: 'Blog' },
        { id: 3, section: 'About' },
        { id: 4, section: 'Contact' },
    ]

    return (
        <header style={{ background: '#f3f3f6'}}>
            <h1>Logo</h1>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex' }}>
                   { navigationBar.map(section => {
                       return <li key={section.id}> { section.section } </li>
                   })} 
                </ul>
            </nav>
        </header>
    )
}

export default Header;