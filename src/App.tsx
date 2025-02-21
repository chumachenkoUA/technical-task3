import './App.scss'
import { galleryItems} from "./date.ts"
import Promo from "./components/Promo.tsx";
import Header from "./components/Header.tsx";
import Gallery from "./components/Gallery.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
        <Header/>
        <Promo/>
        <Gallery galleryItems={galleryItems} />
        <Footer/>
    </>
  )
}

export default App
