import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartContext = {
  getItemQuantity: () => number;
  increaseCartQuantity: (num: number) => void;
  removeFromCart: () => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const CartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = () => {
    return cartItems.find((item) => item)?.quantity || 0;
  };

  const increaseCartQuantity = (num: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item) == null) {
        return [...currItems, { quantity: num }];
      } else {
        return currItems.map((item) => {
          return { ...item, quantity: item.quantity + num };
        });
      }
    });
  };

  const removeFromCart = () => {
    setCartItems((currItems) => {
      return currItems.filter((item) => !item);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
