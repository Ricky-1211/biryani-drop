'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { MenuItem } from '@/data/menu';

export interface CartItem {
  id: string; // can be item.id or item.id + variant
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isVeg: boolean;
  category: string;
  variantName?: string;
}

export interface CustomerOrderDetails {
  customerName: string;
  phone: string;
  orderType: 'Pickup' | 'Delivery';
  address?: string;
  instructions?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, variantName?: string, variantPrice?: number, variantId?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  setItemQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  generateWhatsAppLink: (details: CustomerOrderDetails) => string;
  getItemQuantity: (productId: string, variantId?: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'the_biryani_drop_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart, isLoaded]);

  const addToCart = (
    item: MenuItem,
    variantName?: string,
    variantPrice?: number,
    variantId?: string
  ) => {
    const finalId = variantId ? `${item.id}-${variantId}` : item.id;
    const finalPrice = variantPrice !== undefined ? variantPrice : item.price;
    const displayName = variantName ? `${item.name} (${variantName})` : item.name;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === finalId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: finalId,
          productId: item.id,
          name: displayName,
          price: finalPrice,
          quantity: 1,
          image: item.image,
          isVeg: item.isVeg,
          category: item.categoryName,
          variantName,
        },
      ];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const setItemQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getItemQuantity = (productId: string, variantId?: string): number => {
    const idToFind = variantId ? `${productId}-${variantId}` : productId;
    const item = cart.find((i) => i.id === idToFind);
    return item ? item.quantity : 0;
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateWhatsAppLink = (details: CustomerOrderDetails): string => {
    const phoneTarget = '918079862715';

    let orderItemsText = '';
    cart.forEach((item) => {
      const lineTotal = item.price * item.quantity;
      orderItemsText += `${item.name}\nQuantity: ${item.quantity}\nPrice: ₹${item.price}\nTotal: ₹${lineTotal}\n\n`;
    });

    let message = `Hello The Biryani Drop!\nI would like to place an order.\n\nCustomer Name: ${details.customerName.trim()}\nPhone: ${details.phone.trim()}\nOrder Type: ${details.orderType}\n\nORDER DETAILS:\n${orderItemsText}Subtotal: ₹${subtotal}\n`;

    if (details.orderType === 'Delivery' && details.address) {
      message += `\nDelivery Address: ${details.address.trim()}`;
    }

    if (details.instructions && details.instructions.trim()) {
      message += `\nSpecial Instructions: ${details.instructions.trim()}`;
    }

    message += `\n\nPlease confirm my order. Thank you!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phoneTarget}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        setItemQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        generateWhatsAppLink,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
