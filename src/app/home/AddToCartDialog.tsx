"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface CartItem extends Product {
  option: string;
  quantity: number;
  addGreeting?: string;
  greetingText?: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  productToAdd?: Product | null;
  onCartUpdate?: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  productToAdd,
  onCartUpdate,
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

  const handleAddToCart = () => {
    if (!productToAdd) return;
    if (!selectedOption) {
      alert("Please select a size or option.");
      return;
    }

    const newItem: CartItem = {
      ...productToAdd,
      option: selectedOption,
      quantity,
      ...(productToAdd.category === "Cakes"  && {
        addGreeting,
        greetingText: addGreeting === "yes" ? greetingText : "",
      }),
    };

    const existingIndex = cartItems.findIndex(
      (item) => item.id === newItem.id && item.option === newItem.option
    );

    let updatedCart: CartItem[];
    if (existingIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += quantity;
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

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const productType =
    productToAdd && optionsByCategory[productToAdd.category]
      ? productToAdd.category
      : "Cakes";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b flex-shrink-0">
          <h2 className="text-lg font-semibold text-black">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-800 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* New Product Section */}
        {productToAdd && (
          <div className="p-5 border-b flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={productToAdd.image}
                alt={productToAdd.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">
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
              <div className="space-y-2 max-h-52 overflow-y-auto">
                {optionsByCategory[productType].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-2 border p-2 rounded-lg cursor-pointer hover:bg-gray-50 ${
                      selectedOption === opt
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={opt}
                      checked={selectedOption === opt}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span className="text-sm text-black">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Greeting Option (Only for Cakes) */}
            {productType === "Cakes" && (
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-black">Add Greeting?</h4>
                <select
                  onChange={(e) => setAddGreeting(e.target.value)}
                  value={addGreeting}
                  className="border rounded-md p-2 w-full text-black"
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
                      className="border rounded-md p-2 w-full text-black"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="border px-3 py-1 rounded hover:bg-gray-100 text-black"
              >
                −
              </button>
              <span className="font-medium text-black">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="border px-3 py-1 rounded hover:bg-gray-100 text-black"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
            >
              Add
            </button>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.option}-${index}`}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.option}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                      {item.addGreeting === "yes" && item.greetingText && (
                        <p className="text-sm text-gray-600 italic">
                          🎉 Greeting: “{item.greetingText}”
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t bg-white p-4 flex-shrink-0">
          {cartItems.length > 0 && (
            <Link href="/checkout">
              <button
                onClick={onClose}
                className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
              >
                Proceed to Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
