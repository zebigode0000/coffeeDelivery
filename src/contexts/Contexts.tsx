import { createContext, useState, type ReactNode } from "react";

type CartContextData = {
    coffeeNumber: number
    setCoffeeNumber: React.Dispatch<React.SetStateAction<number>>
    handleAddCart: () => void
}
type CartProviderProps = {
    children: ReactNode
}

export const MyContext = createContext<CartContextData | undefined>(undefined)

export const MyProvider = ({ children }: CartProviderProps) => {
    const [coffeeNumber, setCoffeeNumber] = useState<number>(0)

    function handleAddCart () {

    }
    return (
        <MyContext.Provider value={{handleAddCart, coffeeNumber, setCoffeeNumber}}>
            {children}

        </MyContext.Provider>
    )
}