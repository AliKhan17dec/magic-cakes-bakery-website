"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  basePrice: string;
}

interface CartItem extends Product {
  option: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addGreeting?: string;
  greetingText?: string;
}

// Define proper types for price configuration
interface PriceConfiguration {
  [productId: number]: {
    [option: string]: number;
  };
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  productToAdd?: Product | null;
  onCartUpdate?: () => void;
  priceConfig: PriceConfiguration;
}

export default function CartSidebar({
  isOpen,
  onClose,
  productToAdd,
  onCartUpdate,
  priceConfig,
}: CartSidebarProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [addGreeting, setAddGreeting] = useState("");
  const [greetingText, setGreetingText] = useState("");

  const optionsByCategory: Record<string, string[]> = {
    Cakes: [
      "6” Petite (1 layer) — serves 4–6",
      "6” Regular (2 layers) — serves 8–10",
      "8” — serves 12–16",
      "10” — serves 20–25",
    ],
    Cupcakes: ["Box of 6 cupcakes", "Box of 12 cupcakes"],
    Cheesecakes: ["4” — Mini Cheesecake", "8” — Large Cheesecake"],
    Cookies: ["Box of 6", "Box of 12"],
    Tiramisu: ["5 oz", "12 oz"],
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    if (isOpen) {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (productToAdd) {
      setSelectedOption("");
      setQuantity(1);
      setAddGreeting("");
      setGreetingText("");
    }
  }, [productToAdd]);

  const calculatePrice = (productId: number, option: string, qty: number, hasGreeting: boolean = false) => {
    const basePrice = priceConfig[productId]?.[option] || 0;
    const greetingFee = hasGreeting ? 6 : 0;
    return (basePrice + greetingFee) * qty;
  };

  const getUnitPrice = (productId: number, option: string, hasGreeting: boolean = false) => {
    const basePrice = priceConfig[productId]?.[option] || 0;
    const greetingFee = hasGreeting ? 6 : 0;
    return basePrice + greetingFee;
  };

  const handleAddToCart = () => {
    if (!productToAdd) return;
    if (!selectedOption) {
      alert("Please select a size or option.");
      return;
    }

    const hasGreeting = addGreeting === "yes";
    const unitPrice = getUnitPrice(productToAdd.id, selectedOption, hasGreeting);
    const totalPrice = calculatePrice(productToAdd.id, selectedOption, quantity, hasGreeting);

    const newItem: CartItem = {
      ...productToAdd,
      option: selectedOption,
      quantity,
      unitPrice,
      totalPrice,
      ...(productToAdd.category === "Cakes" && {
        addGreeting,
        greetingText: hasGreeting ? greetingText : "",
      }),
    };

    const existingIndex = cartItems.findIndex(
      (item) => 
        item.id === newItem.id && 
        item.option === newItem.option && 
        item.addGreeting === newItem.addGreeting &&
        item.greetingText === newItem.greetingText
    );

    let updatedCart: CartItem[];
    if (existingIndex !== -1) {
      updatedCart = [...cartItems];
      const existingItem = updatedCart[existingIndex];
      const newQuantity = existingItem.quantity + quantity;
      const newTotalPrice = calculatePrice(
        productToAdd.id, 
        selectedOption, 
        newQuantity, 
        hasGreeting
      );
      
      updatedCart[existingIndex] = {
        ...existingItem,
        quantity: newQuantity,
        totalPrice: newTotalPrice,
      };
    } else {
      updatedCart = [...cartItems, newItem];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    if (onCartUpdate) onCartUpdate();

    setSelectedOption("");
    setQuantity(1);
    setAddGreeting("");
    setGreetingText("");
  };

  const handleRemove = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    if (onCartUpdate) onCartUpdate();
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedCart = [...cartItems];
    const item = updatedCart[index];
    const hasGreeting = item.addGreeting === "yes";
    
    updatedCart[index] = {
      ...item,
      quantity: newQuantity,
      totalPrice: calculatePrice(item.id, item.option, newQuantity, hasGreeting),
    };

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    if (onCartUpdate) onCartUpdate();
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const productType = productToAdd && optionsByCategory[productToAdd.category]
    ? productToAdd.category
    : "Cakes";

  const currentUnitPrice = productToAdd && selectedOption 
    ? getUnitPrice(productToAdd.id, selectedOption, addGreeting === "yes")
    : 0;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* 📱 Responsive: use w-full + max-w on large screens */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 border-b flex-shrink-0">
          <h2 className="text-base sm:text-lg font-semibold text-black">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-800 text-xl sm:text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* New Product Section */}
        {productToAdd && (
          <div className="p-4 sm:p-5 border-b flex-shrink-0">
            <div className="flex items-start gap-3 mb-4">
              <img
                src={productToAdd.image}
                alt={productToAdd.name}
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-black truncate">
                  {productToAdd.name}
                </h3>
                <p className="text-sm text-gray-600">{productType}</p>
              </div>
            </div>

            {/* Option / Size Selection */}
            <div className="mb-4">
              <h4 className="font-medium mb-2 text-black">
                Select {productType === "Cakes" ? "Cake Size" : "Option"}
              </h4>
              <div className="relative">
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full p-2.5 pr-10 border border-gray-200 rounded-lg bg-white text-black appearance-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                >
                  <option value="">Select an option</option>
                  {optionsByCategory[productType].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt} — ${priceConfig[productToAdd?.id]?.[opt] || 0}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Greeting Option (Only for Cakes) */}
            {productType === "Cakes" && (
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-black">Add Greeting?</h4>
                <select
                  onChange={(e) => setAddGreeting(e.target.value)}
                  value={addGreeting}
                  className="border rounded-md p-2 w-full text-black text-sm sm:text-base"
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes + ($6)</option>
                  <option value="no">No</option>
                </select>

                {addGreeting === "yes" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={greetingText}
                      onChange={(e) => setGreetingText(e.target.value)}
                      placeholder="Enter greeting text..."
                      className="border rounded-md p-2 w-full text-black text-sm"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Quantity and Price Summary */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-black text-sm sm:text-base">Quantity:</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="border px-2 py-1 sm:px-3 sm:py-1 rounded hover:bg-gray-100 text-black text-sm"
                  >
                    −
                  </button>
                  <span className="font-medium text-black text-sm sm:text-base min-w-[1.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="border px-2 py-1 sm:px-3 sm:py-1 rounded hover:bg-gray-100 text-black text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {selectedOption && (
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="flex justify-between text-black">
                    <span>Unit Price:</span>
                    <span>${currentUnitPrice}</span>
                  </div>
                  <div className="flex justify-between text-black">
                    <span>Quantity:</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-1 text-black">
                    <span>Total:</span>
                    <span>${(currentUnitPrice * quantity).toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedOption}
              className={`w-full py-2 rounded-md transition text-sm sm:text-base ${
                selectedOption
                  ? "bg-pink-600 text-white hover:bg-pink-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.option}-${index}`}
                  className="border rounded-lg p-3 bg-white shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 sm:w-16 h-14 sm:h-16 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-black text-sm sm:text-base truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 break-words">
                          {item.option}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-pink-600">
                          ${item.unitPrice} × {item.quantity} = ${item.totalPrice}
                        </p>
                        {item.addGreeting === "yes" && item.greetingText && (
                          <p className="text-xs sm:text-sm text-gray-600 italic mt-1 break-words">
                            🎉 Greeting: &quot;{item.greetingText}&quot;
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1 sm:gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleRemove(index)}
                        className="text-red-500 hover:text-red-600 text-xs sm:text-sm whitespace-nowrap"
                      >
                        Remove
                      </button>
                      
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button
                          onClick={() => handleQuantityChange(index, item.quantity - 1)}
                          className="border px-1.5 py-0.5 sm:px-2 sm:py-1 rounded hover:bg-gray-100 text-black text-xs sm:text-sm"
                        >
                          −
                        </button>
                        <span className="font-medium text-black text-xs sm:text-sm w-5 sm:w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(index, item.quantity + 1)}
                          className="border px-1.5 py-0.5 sm:px-2 sm:py-1 rounded hover:bg-gray-100 text-black text-xs sm:text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t bg-white p-4 flex-shrink-0">
          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between items-center mb-3 sm:mb-4 text-base sm:text-lg font-semibold">
                <span className="text-black">Grand Total:</span>
                <span className="text-pink-600">${grandTotal.toFixed(2)}</span>
              </div>
              <Link href="/checkout">
                <button
                  onClick={onClose}
                  className="w-full bg-pink-600 text-white py-2.5 sm:py-3 rounded-md hover:bg-pink-700 transition font-semibold text-sm sm:text-base"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}