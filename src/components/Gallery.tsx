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
            <div className={"gallery"}>
                <span className={"gallery__title"}></span>
                <ul className={"gallery__list"}>
                    {galleryItems.map((item,index)=>(
                        <li className={"gallery__item"} key={index}>
                            <img className={"gallery__image"} src={item.src} alt={item.alt}/>
                            <h2 className={"gallery__brand"}>{item.brand}</h2>
                            <p className={"gallery__founders"}>{item.founders}</p>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default Gallery