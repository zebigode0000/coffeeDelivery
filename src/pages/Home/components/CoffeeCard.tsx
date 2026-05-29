import { ShoppingCartIcon } from '@phosphor-icons/react/dist/ssr'
import { useState, useContext } from 'react'
import { CoffeeCartContext  } from '../../../contexts/Contexts'
import type { Coffee } from '../../../Types'

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({coffee}:CoffeeCardProps) {

const [count, setCount] = useState(1);

  function handleSubCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleSumCount() {
    setCount((state) => state + 1);
  }

const context = useContext(CoffeeCartContext);

if (!context) {
  throw new Error("CoffeeCard deve ser usado dentro de um CoffeeCartProvider");
}

const { handleAddCart } = context;

const coffeePrice: number = 9.90
const totalPrice = coffeePrice * count

    return (
  
  <div className="bg-base-card rounded-xl p-5 pt-0 flex flex-col items-center text-center w-full">
    
    
    <img 
      src={coffee.img} 
      alt="Nome do Café" 
      className=" -mt-10 mx-auto" 
    />

    
    <div className="flex items-center justify-center gap-1 mt-3 flex-wrap">
      <span className="bg-yellow-light text-yellow-dark text-[10px] font-bold uppercase px-2 py-1 rounded-full font-sans">
        {coffee.type}
      </span>
    </div>

    
    <h3 className="font-title text-xl font-bold text-base-subtitle mt-4">
      {coffee.name}
    </h3>

    
    <p className="font-sans text-xs text-base-label mt-2 px-1 leading-relaxed">
      {coffee.description}
    </p>

   
    <div className="w-full flex items-center justify-between mt-8">
      
      
      <div className="flex items-baseline gap-0.5 text-base-text">
        <span className="text-xs font-sans">R$</span>
        <span className="font-title text-2xl font-extrabold text-base-title">{totalPrice.toFixed(2)}</span>
      </div>

      
      <div className="flex items-center gap-2">
        
        
        <div className="flex items-center justify-between gap-1 bg-base-button p-2 rounded-md w-[72px] h-9">
          <button type="button" 
          className="text-purple hover:text-purple-dark transition-colors font-bold text-lg cursor-pointer"
          onClick={handleSubCount}
          disabled={count <= 0}>
            -
          </button>
          <span className="font-sans text-base text-base-title"
        >
            {count}
          </span>
          <button type="button" className="text-purple hover:text-purple-dark transition-colors font-bold text-lg cursor-pointer"
          onClick={handleSumCount}>
            +
          </button>
        </div>
        
        
        <button 
          type="button" 
          onClick={() => handleAddCart(count)}
          className="p-2 bg-purple-dark hover:bg-purple text-white rounded-md transition-colors h-9 w-9 flex items-center justify-center cursor-pointer"
        >
          <ShoppingCartIcon/>
        </button>

      </div>

    </div>

  </div>
)
}