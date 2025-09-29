// import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa"
// import Image from "next/image"

// export default function Hero() {
//   return (
//     <main className="pt-14 bg-white"> {/* padding to avoid overlap with header */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-8 mx-auto max-lg:mt-20">
//                 <div className="space-y-6">
//                   <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight font-playfair">
//                     Confectionery
//                     <br />
//                     <span className="">&</span> bakery shop
//                   </h1>
    
//                   <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-600 font-medium font-playfair">
//                     Same day cake delivery in Canada
//                   </p>
    
//                   <button className="bg-[#D10000] hover:bg-transparent border-2 border-[#D10000] hover:text-[#D10000] text-white px-10 py-2 rounded-full font-medium transition-colors duration-300 text-md 2xl:text-lg">
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
//                     src="/Group 9.webp"
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

















"use client"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen bg-white overflow-hidden max-lg:pt-32">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 92, 119, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 92, 119, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out z-20" 
          style={{
            background: `radial-gradient(circle, #FF5C77 0%, #FFE6EA 70%, transparent 100%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#FF5C77] to-[#FFE6EA] opacity-20 animate-pulse" />
        <div
          className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFE6EA] to-[#FF5C77] opacity-30 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <div className="relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen">
          {/* Left Content */}
          <div
            className={`flex items-center justify-center px-6 lg:px-12 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight font-playfair">
                    <span className="inline-block animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                      <span className="bg-gradient-to-r from-gray-900 via-[#FF5C77] to-gray-900 bg-clip-text text-transparent bg-300% animate-gradientShift">
                        Confectionery
                      </span>
                    </span>
                    <br />
                    <span className="inline-block animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                      <span className="text-[#FF5C77] drop-shadow-lg">&</span>{" "}
                      <span className="bg-gradient-to-r from-gray-900 via-[#FF5C77] to-gray-900 bg-clip-text text-transparent bg-300% animate-gradientShift">
                        bakery shop
                      </span>
                    </span>
                  </h1>

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF5C77] rounded-full opacity-60 animate-ping" />
                  <div className="absolute top-1/2 -left-6 w-4 h-4 bg-[#FFE6EA] rounded-full animate-pulse" />
                </div>

                <div
                  className={`text-lg lg:text-xl 2xl:text-2xl text-gray-600 font-medium font-playfair relative animate-fadeInUp`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <span className="relative z-10">Same day cake delivery in Canada</span>
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFE6EA] to-[#FF5C77] transform scale-x-0 animate-scaleX"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                <div className={`animate-fadeInUp`} style={{ animationDelay: "0.8s" }}>
                  <button className="group relative bg-[#FF5C77] hover:bg-transparent border-2 border-[#FF5C77] hover:text-[#FF5C77] text-white px-12 py-4 rounded-full font-medium transition-all duration-500 text-md 2xl:text-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5C77]/25">
                    <span className="relative z-10 flex items-center gap-2">
                      Shop now
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C77] to-[#FFE6EA] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5C77] to-[#FFE6EA] rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  </button>
                </div>
              </div>

              <div className={`flex space-x-6 lg:pt-8 animate-fadeInUp`} style={{ animationDelay: "1s" }}>
                {[
                  { Icon: FaFacebookF, delay: "1.2s" },
                  { Icon: FaTwitter, delay: "1.4s" },
                  { Icon: FaInstagram, delay: "1.6s" },
                ].map(({ Icon, delay }, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group relative p-3 text-gray-600 hover:text-[#FF5C77] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    style={{ animationDelay: delay }}
                  >
                    <div className="absolute inset-0 bg-[#FFE6EA] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <Icon className="relative z-10 w-5 h-5 2xl:w-7 2xl:h-7" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#FF5C77] to-[#FFE6EA] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image - Full height and aligned to right */}
          <div className="relative h-full">
            <div className="relative z-10 group h-full w-full">
              <div
                className="absolute top-20 left-8 w-16 h-16 bg-gradient-to-br from-[#FF5C77] to-[#FFE6EA] rounded-full opacity-60 animate-bounce"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute bottom-20 right-8 w-12 h-12 bg-gradient-to-br from-[#FFE6EA] to-[#FF5C77] rounded-full opacity-80 animate-pulse" />
              <div className="absolute top-1/2 right-12 w-8 h-8 bg-[#FF5C77] rounded-full opacity-40 animate-ping" />

              <div className="relative overflow-hidden h-full w-full">
                <Image
                  src="/Group 9.webp"
                  alt="Elegant chocolate layer cake with decorative flowers on a white cake stand"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center transition-transform duration-700 "
                  priority
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#FF5C77]/10 via-transparent to-[#FFE6EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5C77] to-[#FFE6EA] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" /> */}
              </div>

              {/* <div
                className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-[#FFE6EA]/50 animate-fadeInUp"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF5C77] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Fresh Daily</span>
                </div>
              </div> */}

              {/* <div
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-[#FFE6EA]/50 animate-fadeInUp"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#FF5C77]">★★★★★</span>
                  <span className="text-sm font-medium text-gray-700">5.0</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scaleX {
          animation: scaleX 0.8s ease-out forwards;
        }
        
        .animate-gradientShift {
          animation: gradientShift 3s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </main>
  )
}