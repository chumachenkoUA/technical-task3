
function Gallery() {

    return (
        <>
            <div className={"gallery"}>
                <span className={"gallery__title"}></span>
                <ul className={"gallery__list"}>
                    <li className={"gallery__item"}>
                        <img className={"gallery__image"} src={""} alt=""/>
                        <h2 className={"gallery__brand"}></h2>
                        <span className={"gallery__founders"}></span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Gallery