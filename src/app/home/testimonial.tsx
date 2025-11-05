"use client"

import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "I ordered an eggless cake for my parents’ welcome to Canada, and it turned out absolutely perfect! The cake was fresh, beautifully decorated, and had just the right amount of sweetness. Everyone loved it — thank you for making the occasion extra special!! Thanks to Bee 🫶🏼",
      author: "Dawn the"
    },
    {
      id: 2,
      stars: 5,
      text: "We had a wonderful experience at this bakery! B and Dinesh were incredibly friendly and helpful. We went in to buy a birthday cake for my husband, and they even made a custom order with four cupcakes exactly how we wanted. The service was excellent, and the staff made us feel so welcome. Highly recommend for anyone looking for delicious baked treats and amazing service!",
      author: "Garima"
    },
    {
      id: 3,
      stars: 5,
      text: "i stopped by here this morning looking for a quick breakfast and found a new spot! i ordered the vanilla cold foam matcha (which you don’t see on main street), a black forest cupcake, and a nutella cupcake. the matcha was AMAZING! not too sweet or bitter, a good portion and the foam was a great touch. the cupcakes were also really good, they were super decadent and moist and the icing is so good, very airy and not overpowering. not only was the food 10/10 but the owner, B, was super sweet going out of her way to bring such great service and a lasting impression in a short encounter. planning to return for this same order plus more soon!",
      author: "Naomi Adenrele"
    },
    {
      id: 4,
      stars: 5,
      text: "I ordered an eggless cake at the very last minute, and I was truly impressed! Not only did she manage to accommodate my request on such short notice, but the cake was absolutely delicious. It was fresh, beautifully made, and full of flavor — definitely worth tasting! It made our occasion extra special, and I’m so grateful for the effort and quality. Highly recommend!",
      author: "Himanshu Sachdeva"
    },
    {
      id: 5,
      stars: 5,
      text: "I reached out less than 24 hrs and was happy she attended to my request. When I saw the cake I was so happy. The design was so beautiful, then I tasted it and was blown away. It was a chocolate cake with chocolate chips in it and the frosting. I really loved it. My guest enjoyed it. My son was happy with the design.",
      author: "Omobolanle"
    },
    {
      id: 6,
      stars: 5,
      text: "I recently got a beautiful cake, and it was absolutely delicious! The design was stunning, with intricate details that made it perfect for the occasion. Not only did it look amazing, but the taste was out of this world! Each bite was rich and flavorful, and it was clear that high-quality ingredients were used. I couldn't get enough of it! Highly recommend this cake for anyone looking to treat themselves or celebrate a special moment.",
      author: "Jot"
    },
    {
      id: 7,
      stars: 5,
      text: "The desserts are amazing ! I tried the cold foam matcha latte and it was delicious 😋 also had the banana pudding and oatmeal raisin cookie. I highly recommend",
      author: "Mia Palozzi"
    },
    {
      id: 8,
      stars: 5,
      text: "I loved the space! I came on a very short notice at night! She made an entire mini cake for us! Within 30 minutes! Adorable would come back 100%",
      author: "It's Arells"
    }
  ];

  // Duplicate the testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-[#f9dde9] py-16 overflow-hidden">
      {/* Top Wave */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 text-balance leading-tight font-playfair">
            <span className="text-black">What Our</span> <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">Customer&apos;s Says</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our happy customers say — from delightful taste to premium ingredients and the love in every cake.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-horizontal">
            {duplicatedTestimonials.map((testimonial, index) => (
  <div 
    key={`${testimonial.id}-${index}`} 
    className="flex-shrink-0 w-[450px] px-4"
  >
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="flex text-yellow-400 mb-4">
        {Array.from({ length: testimonial.stars }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">
        {testimonial.text.length > 180
          ? testimonial.text.slice(0, 180) + "..."
          : testimonial.text}
      </p>
      <div className="text-right mt-4">
        <p className="text-gray-800 font-semibold">{testimonial.author}</p>
      </div>
    </div>
  </div>
))}

          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div> */}

      <style jsx>{`
        @keyframes slideHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide-horizontal {
          animation: slideHorizontal 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-slide-horizontal:hover {
          animation-play-state: paused;
        }
        
        /* Add a smooth transition for the animation */
        .animate-slide-horizontal {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default CustomerTestimonials;