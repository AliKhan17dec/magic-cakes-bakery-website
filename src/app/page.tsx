
import Image from "next/image"
import Hero from "./home/hero"
import Catalog from "./home/catalog"
import CatalogSection from "./home/catalog"
import AdvantagesSection from "./home/advantagesection"
import AboutUsSection from "./home/aboutus"
import CustomerTestimonials from "./home/testimonial"
import HowItWorks from "./home/howitworks"
import CookieBiscottiSection from "./home/home2"


export default function CakeShopPage() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      
      <CookieBiscottiSection />
      {/* <Hero /> */}
      <HowItWorks />
      <CatalogSection />
      <AdvantagesSection />
      <AboutUsSection />
      <CustomerTestimonials />
      

      
    </div>
  )
}
