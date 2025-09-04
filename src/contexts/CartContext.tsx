import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  instructor: string;
  duration: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  category: string;
  rating: number;
  students: number;
}

export interface CartItem extends Course {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  updateQuantity: (courseId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (course: Course) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === course.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...course, quantity: 1 }];
    });
  };

  const removeFromCart = (courseId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== courseId));
  };

  const updateQuantity = (courseId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(courseId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === courseId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};