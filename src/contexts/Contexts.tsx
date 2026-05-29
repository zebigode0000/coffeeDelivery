import { createContext, useState, type ReactNode } from "react";
import type { Coffee } from "../Types";


type CartContextData = {
  coffeeNumberCart: number;
  setCoffeeNumberCart: React.Dispatch<React.SetStateAction<number>>;
  handleAddCart: ( addItem: Coffee, quantity: number) => void;
  addCartItem: CartItem[]
};
type CartProviderProps = {
  children: ReactNode;
};
export interface CartItem extends Coffee {
    quantity:number
}

export const CoffeeCartContext = createContext<CartContextData | undefined>(
  undefined,
);

export const CoffeeCartProvider = ({ children }: CartProviderProps) => {
  const [coffeeNumberCart, setCoffeeNumberCart] = useState<number>(0);
  const [addCartItem, setAddCartItem] = useState<CartItem[]>([]);

  function handleAddCart(chosenItem: Coffee,quantity: number) {
    setAddCartItem((state) => {
        const itemIndex = state.findIndex((item) => 
            item.id === chosenItem.id
    )

        if (itemIndex >= 0) {
        const newCart = [...state];
        
        newCart[itemIndex].quantity += quantity;
        
        return newCart;
      } 
    
      return [...state, { ...chosenItem, quantity }];
    })


    const coffeeNumberCart = addCartItem.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <CoffeeCartContext.Provider
      value={{ handleAddCart, addCartItem, coffeeNumberCart, setCoffeeNumberCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
};
