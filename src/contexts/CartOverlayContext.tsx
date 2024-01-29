import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartOverlayContext = createContext<CartContextType | undefined>(undefined);

interface CartOverlayProviderProps {
  children: ReactNode;
}

export const CartOverlayProvider: React.FC<CartOverlayProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartOverlayContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartOverlayContext.Provider>
  );
};

export const useCartOverlay = () => {
  const context = useContext(CartOverlayContext);
  if (!context) {
    throw new Error('useCartOverlay must be used within a CartOverlayProvider');
  }
  return context;
};
