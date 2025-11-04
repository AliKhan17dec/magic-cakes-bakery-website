
import Image from "next/image"
import Hero from "./home/hero"
import Catalog from "./home/catalog"
import CatalogSection from "./home/catalog"
import AdvantagesSection from "./home/advantagesection"
import AboutUsSection from "./home/aboutus"
import CustomerTestimonials from "./home/testimonial"
import HowItWorks from "./home/howitworks"
import CookieBiscottiSection from "./home/home2"
import SweetCollection from "./home/CategorySection"
import CustomizeOrderSection from "./home/CustomizeOrder"


export default function CakeShopPage() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      
      <CookieBiscottiSection />
      {/* <Hero /> */}
      <HowItWorks />
      {/* <CatalogSection /> */}
      <SweetCollection />
      <AdvantagesSection />
      <AboutUsSection />
      <CustomerTestimonials />
      <CustomizeOrderSection />     
    </div>
  )
}
