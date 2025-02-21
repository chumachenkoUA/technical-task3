function Header() {

    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a className={"header__nav-link"} href={"#"}>
                                Blog
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a className={"header__nav-link"} href={"#"}>
                                Press
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a className={"header__nav-link"} href={"#"}>
                                Join us
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header