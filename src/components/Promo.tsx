interface promoProps {
    promoLabel:string;
    promoTitle:string;
}

function Promo({promoLabel, promoTitle}:promoProps) {

    return (
        <>
            <section className={"promo"}>
                <aside className={"promo__label"}>{promoLabel}</aside>
                <h1 className={"promo__title"}>{promoTitle}</h1>
            </section>
        </>
    )
}

export default Promo