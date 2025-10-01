// import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa"
// import Image from "next/image"

// export default function Hero() {
//   return (
//     <main className="pt-14 bg-white"> {/* padding to avoid overlap with header */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-8 mx-auto max-lg:mt-20">
//                 <div className="space-y-6">
//                   <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#7B3F00] leading-tight ">
//                     Confectionery
//                     <br />
//                     <span className="">&</span> bakery shop
//                   </h1>
    
//                   <p className="text-xl lg:text-2xl 2xl:text-3xl text-[#C19A6B] font-medium font-playfair">
//                     Same day cake delivery in Canada
//                   </p>
    
//                   <button className="bg-[#A0522D] hover:bg-transparent border-2 border-[#A0522D] hover:text-[#A0522D] text-white px-10 py-2 rounded-full font-medium transition-colors duration-300 text-md 2xl:text-lg">
//                     Shop now
//                   </button>
//                 </div>
    
//                 {/* Social Media Icons */}
//                 <div className="flex space-x-6 lg:pt-8 max-lg:mb-10">
//                   <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
//                     <FaFacebookF className="w-5 h-5 2xl:w-7 2xl:h-7" />
//                   </a>
//                   <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
//                     <FaTwitter className="w-5 h-5 2xl:w-7 2xl:h-7" />
//                   </a>
//                   <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
//                     <FaInstagram className="w-5 h-5 2xl:w-7 2xl:h-7" />
//                   </a>
//                 </div>
//               </div>
    
//               {/* Right Content - Cake Image */}
//               <div className="relative -mt-14"> {/* shift image up to overlap header */}
//                 <div className="relative z-10">
//                   <Image
//                     src="/Generated_Image_September_29__2025_-_11_54PM-removebg-preview 1.png"
//                     alt="Elegant chocolate layer cake with decorative flowers on a white cake stand"
//                     width={600}
//                     height={600}
//                     className="w-full h-auto object-cover rounded-lg"
//                     priority
//                   />
//                 </div>
    
                
//               </div>
//             </div>
//           </main>
//   )
// }















import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa"
import Image from "next/image"

export default function Hero() {
  return (
    <main className="pt-16 bg-white relative min-h-screen"> {/* Add 'relative' for positioning */}
  {/* Background Image with Opacity */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
    style={{ backgroundImage: "url('/ChatGPT Image Sep 29, 2025, 11_58_17 PM.png')" }}
  ></div>

  {/* Your existing content wrapped in a relative container to stay above bg */}
  <div className="relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
      {/* Left Content */}
      {/* Left Content */}
              <div className="space-y-8 mx-auto max-lg:mt-20">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#7B3F00] leading-tight ">
                    Confectionery
                    <br />
                    <span className="">&</span> bakery shop
                  </h1>
    
                  <p className="text-xl lg:text-2xl 2xl:text-3xl text-[#C19A6B] font-medium font-playfair">
                    Same day cake delivery in Canada
                  </p>
    
                  <button className="bg-[#A0522D] hover:bg-transparent border-2 border-[#A0522D] hover:text-[#A0522D] text-white px-10 py-2 rounded-full font-medium transition-colors duration-300 text-md 2xl:text-lg">
                    Shop now
                  </button>
                </div>
    
                {/* Social Media Icons */}
                <div className="flex space-x-6 lg:pt-8 max-lg:mb-10">
                  <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <FaFacebookF className="w-5 h-5 2xl:w-7 2xl:h-7" />
                  </a>
                  <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <FaTwitter className="w-5 h-5 2xl:w-7 2xl:h-7" />
                  </a>
                  <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <FaInstagram className="w-5 h-5 2xl:w-7 2xl:h-7" />
                  </a>
                </div>
              </div>

      {/* Right Content - Cake Image */}
      <div className="relative -mt-14">
        <div className="relative z-10">
          <Image
            src="/Generated_Image_September_29__2025_-_11_54PM-removebg-preview 1.png"
            alt="Elegant chocolate layer cake with decorative flowers on a white cake stand"
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</main>
  )
}