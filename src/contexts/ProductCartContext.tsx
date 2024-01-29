import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ShoppingCartContextProps {
    cartCount: number;
    totalCost: number;
    updateCartCount: (count: number) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('useShoppingCart måste användas inom en ShoppingCartProvider');
    }
    return context;
};

interface ShoppingCartProviderProps {
    children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
    const [cartCount, setCartCount] = useState<number>(1);
    const [itemCost, setItemCost] = useState<number>(399);

    const updateTotalCost = (newCount: number) => {
    setItemCost(newCount * 399);
};

const updateCartCount = (count: number) => {
    setCartCount(count);
    updateTotalCost(count);
};

const value: ShoppingCartContextProps = {
cartCount,
totalCost: itemCost,
updateCartCount,
};

return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
};