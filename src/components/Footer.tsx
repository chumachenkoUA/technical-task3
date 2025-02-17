interface footerItem {
    title: string;
    link: string;
}
interface footerProps {
    brands:footerItem[];
    company: footerItem[];
    socials: footerItem[];
}

function Footer({brands,company,socials}: footerProps) {

    return (
        <>
            <footer className="footer">
                <div className={"footer__contact"}>contact</div>
                <section className={"footer__content"}>
                    <p className={"footer__text"}>We're focused on building brands and a better future.</p>
                    <p className={"footer__text"}>
                        If you'd like to partner with us, we're{" "}
                        <a className={"footer__link"} href={"mailto:acquisitions@patternbrands.com"}>here</a>{" "}
                         to talk.
                    </p>

                    <ul className={"footer__list"}>
                        {brands.map((item, index) => (
                            <li key={index} className={"footer__item"}>
                                <a className={"footer__link"} href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className={"footer__list"}>
                        {company.map((item, index) => (
                            <li key={index} className={"footer__item"}>
                                <a className={"footer__link"} href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className={"footer__list"}>
                        {socials.map((item, index) => (
                            <li key={index} className={"footer__item"}>
                                <a className={"footer__link"} href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>

                    <address>
                        <a className={"footer__link"} href={"#"}>
                            228 Park Ave S.<br/>
                            New York, NY 10003
                        </a>
                        <a className={"footer__link"} href={"mailto:acquisitions@patternbrands.com"}>acquisitions@patternbrands.com</a>
                    </address>
                </section>
                <div className={"footer__copyright"}>
                    &copy; 2025 Pattern Brands
                </div>
            </footer>
        </>
    )
}

export default Footer