
function Header() {

    return (
        <>
            <header className="main-header">
                <nav className="main-nav">
                    <ul className="main-nav__list site-list">
                        <li className="site-list__item">
                            <a href="/">
                                Blog
                            </a>
                        </li>
                        <li className="site-list__item">
                            <a href="/">
                                Press
                            </a>
                        </li>
                        <li className="site-list__item">
                            <a href="/">
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