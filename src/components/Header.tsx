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
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {navListItems.map(item => (
                            <li key={item.link+item.title} className="header__nav-item">
                                <a className={"header__nav-link"} href={item.link}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="header__line"/>
        </>
    )
}

export default Header