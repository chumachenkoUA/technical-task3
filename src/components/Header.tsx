interface navListItem{
    title:string;
    link:string;
}

interface headerProps {
    navListItems: navListItem[];
}




function Header({navListItems}: headerProps) {

    return (
        <>
            <header className="main-header">
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        {navListItems.map(item => (
                            <li key={item.link+item.title} className="main-nav__list-item">
                                <a href={item.link}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header