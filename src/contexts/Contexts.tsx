import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Coffee } from "../Types";

type CartContextData = {
  coffeeNumberCart: number;
  handleAddCart: (addItem: Coffee, quantity: number) => void;
  addCartItem: CartItem[];
  handleQuantityCoffee: (id: number, type: "increase" | "decrease") => void
};
type CartProviderProps = {
  children: ReactNode;
};
export interface CartItem extends Coffee {
  quantity: number;
}

export const CoffeeCartContext = createContext<CartContextData | undefined>(
  undefined,
);

export const CoffeeCartProvider = ({ children }: CartProviderProps) => {
  const [addCartItem, setAddCartItem] = useState<CartItem[]>([]);

  function handleAddCart(chosenItem: Coffee, quantity: number) {
    setAddCartItem((state) => {
      const itemIndex = state.findIndex((item) => item.id === chosenItem.id);

      if (itemIndex >= 0) {
        const newCart = [...state];
        newCart[itemIndex].quantity += quantity;

        return newCart;
      }
      return [...state, { ...chosenItem, quantity }];
    });
  }


  const coffeeNumberCart = addCartItem.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  useEffect(() => {
    console.log("Minha bandeja de cafés atualizada:", addCartItem);
  }, [addCartItem]);

  function handleQuantityCoffee (id: number, type: 'increase' | 'decrease') {
    addCartItem.map((item) => { 
      if(item.id === id) {
        if(type === 'increase'){
         return item.quantity + 1
        } else {
         return item.quantity - 1
        }
      }
  })
  }

  return (
    <CoffeeCartContext.Provider
      value={{ handleAddCart, addCartItem, coffeeNumberCart, handleQuantityCoffee }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
};
