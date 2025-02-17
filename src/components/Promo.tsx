interface promoProps {
    promoLabel:string;
    promoTitle:string;
}

function Promo() {

    return (
        <>
            <section className={"promo"}>
                <aside className={"promo__label"}>BUSINESS thoughts 💭</aside>
                <h1 className={"promo__title"}>For founders on building, growing, and selling your brand.</h1>
            </section>
        </>
    )
}

export default Promo