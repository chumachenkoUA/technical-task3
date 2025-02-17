import './App.css'
import {navListItems, promoLabel, promoTitle, galleryItems,brands,company,socials} from "./date.ts"
import Promo from "./components/Promo.tsx";
import Header from "./components/Header.tsx";
import Gallery from "./components/Gallery.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
        <Header navListItems={navListItems}/>
        <Promo promoLabel={promoLabel} promoTitle={promoTitle} />
        <Gallery galleryItems={galleryItems} />
        <Footer brands={brands} company={company} socials={socials} />
    </>
  )
}

export default App
