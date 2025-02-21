interface galleryItem{
    src:string;
    alt:string;
    brand:string;
    founders:string;
}

interface galleryProps{
    galleryItems:galleryItem[];
}


function Gallery({galleryItems}:galleryProps) {

    return (
        <>
            <section className={"gallery"}>
                <p className={"gallery__title"}>Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽</p>
                <ul className={"gallery__list"}>
                    {galleryItems.map((item,index)=>(
                        <li className={"gallery__item"} key={index}>
                            <img className={"gallery__image"} src={item.src} alt={item.alt}/>
                            <div className={"gallery__content"}>
                                <h2 className={"gallery__brand"}>{item.brand}</h2>
                                <p className={"gallery__founders"}>{item.founders}</p>
                            </div>
                            </li>
                    ))}

                </ul>
            </section>
        </>
    )
}

export default Gallery