import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Coffee } from "../Types";

type CartContextData = {
  coffeeNumberCart: number;
  handleAddCart: (addItem: Coffee, quantity: number) => void;
  addCartItem: CartItem[];
  handleQuantityCoffee: (id: number, type: "increase" | "decrease") => void
  handleRemoveCartItem: (id: number) => void
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
  const [addCartItem, setAddCartItem] = useState<CartItem[]>(() => {
    const storageStateJSON = localStorage.getItem('@timer-estudo:cart-item-1.0.0')

    if(storageStateJSON) {
      return JSON.parse(storageStateJSON)
    }
    return []
  });

  function handleAddCart(chosenItem: Coffee, quantity: number) {
    setAddCartItem((state) => {
    const itemAlreadyExists = state.some((item) => 
       item.id === chosenItem.id
    )

    if(itemAlreadyExists) {
        return state.map((item) => {
        if(item.id === chosenItem.id) {
          return {...item, quantity: item.quantity + quantity}
        } 
          return item       

      })
    }
    else {
      return [...state, {...chosenItem, quantity }]
    }
   })}


  const coffeeNumberCart = addCartItem.reduce(
    (total, item) => total + item.quantity,
    0,
  );


  useEffect(() => {
  const stateJSON = JSON.stringify(addCartItem)

  localStorage.setItem('@timer-estudo:cart-item-1.0.0', stateJSON)
 }, [addCartItem])

  function handleQuantityCoffee(id: number, type: 'increase' | 'decrease') {
  setAddCartItem((state) => {
    return state.map((item) => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })
  })
}

function handleRemoveCartItem (id: number) {
    setAddCartItem((state) => { 
     return state.filter((item) => 
        item.id !== id)
    })
}

  return (
    <CoffeeCartContext.Provider
      value={{ handleAddCart, addCartItem, coffeeNumberCart, handleQuantityCoffee, handleRemoveCartItem }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
};
