import './App.css'

import Promo from "./components/Promo.tsx";
import Header from "./components/Header.tsx";
import Gallery from "./components/Gallery.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    const brands = [
        {title:"Open Spaces", link:"#"},
        {title:"GIR", link:"#"},
        {title:"Letterfolk", link:"#"},
        {title:"Yield", link:"#"},
        {title:"Poketo", link:"#"},
        {title:"Equal Parts", link:"#"}
    ]

    const company = [
        {title:"Careers", link:"#"},
        {title:"Press", link:"#"},
    ]

    const socials = [
        {title:"Instagram", link:"#"},
        {title:"Twitter", link:"#"}
    ]

    const galleryItems = [
        {src:"/GIR_OneYearIn.png", alt:"GIR: One Year In",brand:"GIR: One Year In",founders:"Case Study"},
        {src:"/IntroducingOnsen.png", alt:"Introducing Onsen",brand:"Introducing Onsen",founders:"new additions"},
        {src:"/SellingYourShopifyBrand_AnIntroduction.png", alt:"Selling Your Shopify Brand: An Introduction",brand:"Selling Your Shopify Brand: An Introduction",founders:"Mergers & Acquisitions 101"},
        {src:"/5ReasonsWeAreOptimisticfor2023.png", alt:"5 Reasons We Are Optimistic for 2023",brand:"5 Reasons We Are Optimistic for 2023",founders:"MERGERS & ACQUISITIONS 101"},
        {src:"/WhyRightNowisaGreatTimetoSellYourBrand.png", alt:"Why Right Now is a Great Time to Sell Your Brand",brand:"Why Right Now is a Great Time to Sell Your Brand",founders:"MERGERS & ACQUISITIONS 101"},
        {src:"/SellingYourShopifyBrand_Week1.png", alt:"Selling Your Shopify Brand: Week 1",brand:"Selling Your Shopify Brand: Week 1",founders:"Mergers & Acquisitions 101"},
        {src:"/Pattern's2022Update.png", alt:"Pattern's 2022 Update",brand:"Pattern's 2022 Update",founders:"THOUGHT LEADERSHIP"},
        {src:"/IntroducingYield.png", alt:"Introducing Yield",brand:"Introducing Yield",founders:"New Additions"},
        {src:"/IntroducingPoketo.png", alt:"Introducing Poketo",brand:"Introducing Poketo",founders:"New additions"},
    ]

    const promoLabel = "BUSINESS thoughts 💭"
    const promoTitle = "For founders on building, growing, and selling your brand."

    const navListItems = [
        {title:"Blog", link:"#"},
        {title:"Press", link:"#"},
        {title:"Join us", link:"#"},
    ]

  return (
    <>
        <Header/>
        <Promo/>
        <Gallery/>
        <Footer/>
    </>
  )
}

export default App
