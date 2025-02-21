function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className={"footer__text-wrapper"}>
                        <div className={"footer__contact"}>contact</div>
                        <p className={"footer__text"}>We're focused on building brands and a better future.</p>
                        <p className={"footer__text"}>
                            If you'd like to partner with us, we're{" "}
                            <a className={"footer__text-link"} href={"mailto:acquisitions@patternbrands.com"}>here</a>{" "}
                            to talk.
                        </p>
                    </div>
                    <div className={"footer__lists"}>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Open Spaces</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>GIR</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Letterfolk</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Yield</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Poketo</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Equal Parts</a>
                            </li>

                        </ul>

                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Careers</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Press</a>
                            </li>
                        </ul>

                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Instagram</a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link"} href={"#"}>Twitter</a>
                            </li>
                        </ul>

                        <address className={"footer__list-address"}>
                            <a className={"footer__link"} href={"#"}>
                                228 Park Ave S.<br/>
                                New York, NY 10003
                            </a>
                            <a className={"footer__link"} href={"mailto:acquisitions@patternbrands.com"}>acquisitions@patternbrands.com</a>
                        </address>
                    </div>
                </div>

                <div className={"footer__copyright"}>
                   <div className={"footer__copyright-content"}> &copy; 2025 Pattern Brands</div>
                </div>
            </footer>
        </>
    )
}

export default Footer