

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Grid: 1 column on mobile, 3 on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* SHOP Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="./" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/catalog" className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="cart" className="hover:text-white transition-colors">Cart</a></li>
            </ul>
          </div>

          {/* CONTACT Column */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>info@cannoli queens.com</p>
              <p>+1 905-850-8880</p>
              <p>200 Marycroft Ave #23</p>
              <p>Vaughan Ontario</p>
              <p>L4L 5X9 Canada</p>
            </div>
            {/* Optional: Uncomment if you want to add later */}
            {/* <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-sm font-medium flex items-center gap-2 mx-auto transition-colors">
              <FaHeart className="w-4 h-4" />
              Follow on shop
            </button> */}
          </div>

          {/* ABOUT US Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
            <p className="text-sm text-gray-300 leading-relaxed px-4 md:px-0">
              Exquisitely designed desserts made by bakers and artists who love sweets. Personalized and hand delivered with extraordinary care.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 px-6">
          {/* Payment Icons - Wrap on mobile */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-8">
            {[
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/amex.png?v=1640000000", alt: "American Express" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/apple-pay.png?v=1640000000", alt: "Apple Pay" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/discover.png?v=1640000000", alt: "Discover" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/google-pay.png?v=1640000000", alt: "Google Pay" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/mastercard.png?v=1640000000", alt: "Mastercard" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/paypal.png?v=1640000000", alt: "PayPal" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/shopify-pay.png?v=1640000000", alt: "Shopify Pay" },
              { src: "https://cdn.shopify.com/s/files/1/0000/0000/0000/products/visa.png?v=1640000000", alt: "Visa" },
            ].map((payment, index) => (
              <img
                key={index}
                src={payment.src}
                alt={payment.alt}
                className="h-6 md:h-7 object-contain"
              />
            ))}
          </div>

          {/* Copyright & Shopify */}
          <div className="text-xs text-gray-400 text-center md:text-left space-y-2 md:space-y-0 md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
              {/* <span>Powered by Shopify</span> */}
              <span>© 2025, Magic Cake</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;