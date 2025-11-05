"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import CartSidebar from "../home/AddToCartDialog";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  basePrice: string; // Add this line
}

interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  // add other cart item properties you need
}

interface CartContextType {
  isCartOpen: boolean;
  openCart: (product?: Product) => void;
  closeCart: () => void;
  cartCount: number;
  cartItems: CartItem[];
  refreshCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productToAdd, setProductToAdd] = useState<Product | undefined>();
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to refresh cart data from localStorage
  const refreshCart = () => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const items = JSON.parse(savedCart);
      setCartItems(items);
      const total = items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
      setCartCount(total);
    } else {
      setCartItems([]);
      setCartCount(0);
    }
  };

  // Load cart on initial render
  useEffect(() => {
    refreshCart();
  }, []);

  const openCart = (product?: Product) => {
    setProductToAdd(product);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
    // Refresh cart when closing to get latest data
    refreshCart();
  };

  return (
    <CartContext.Provider value={{ 
      isCartOpen, 
      openCart, 
      closeCart, 
      cartCount, 
      cartItems,
      refreshCart 
    }}>
      {children}
      {/* Only one CartSidebar instance here */}
      <CartSidebar 
  isOpen={isCartOpen} 
  onClose={closeCart} 
  productToAdd={productToAdd} 
  onCartUpdate={refreshCart}
  priceConfig={{}}
/>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}