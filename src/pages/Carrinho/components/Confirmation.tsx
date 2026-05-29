import { useState } from "react";
import { TrashIcon } from "@phosphor-icons/react";
import { CoffeeCartContext } from '../../../contexts/Contexts'
import { useContext } from "react";


export function Conformation() {

  

  const coffeePrice = 9.9;
  const delivery = 3.50;
  
  
  const context = useContext(CoffeeCartContext);
  
  if (!context) {
    throw new Error("CoffeeCard deve ser usado dentro de um CoffeeCartProvider");
  }
  
  const { addCartItem, handleQuantityCoffee } = context;

  const totalPrice = addCartItem.reduce((prev, item) => {
    return prev + (item.quantity * coffeePrice) + delivery
  }, 0)

  const TotalItens = addCartItem.reduce((prev, item) => {
    return prev + item.quantity
  }, 0)


  return (
    <div className="w-full data-container">
      <h1 className="font-title text-base-title text-xl font-bold mb-4">
        Cafés Selecionados
      </h1>

      <div className="bg-base-card p-10 rounded-xl w-full">
        <div className="flex flex-col justify-between items-start w-full border-b border-base-button pb-6 gap-6">
          
          {addCartItem.map((item) => ( 
            <div key={item.id} className="flex w-full justify-between items-center gap-5">
              
              {/* Lado esquerdo: Foto, Nome e Botões */}
              <div className="flex items-center gap-5">
                <img src={item.img} className="w-16 h-16 object-contain" alt={item.name} />
                
                <div className="flex flex-col gap-2">
                  <p className="font-sans text-base text-base-subtitle leading-tight">
                    {item.name}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-between gap-1 bg-base-button p-2 rounded-md w-[72px] h-9">
                      <button
                        type="button"
                        className="text-purple hover:text-purple-dark transition-colors font-bold text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => handleQuantityCoffee(item.id, 'decrease')}
                        
                      >
                        -
                      </button>
                      <span className="font-sans text-base text-base-title">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="text-purple hover:text-purple-dark transition-colors font-bold text-lg cursor-pointer"
                        onClick={() => handleQuantityCoffee(item.id, 'increase')}
                      >
                        +
                      </button>
                    </div>

                    <button 
                      type="button"
                      className="flex items-center justify-center gap-1 bg-base-button hover:bg-base-hover text-base-text p-2 rounded-md h-9 px-2 text-xs uppercase transition-colors cursor-pointer"
                    >
                      <TrashIcon size={16} className="text-purple" />
                      remover
                    </button>
                  </div>
                </div>
              </div>

              
              <div className="text-right min-w-[80px]">
                <p className="font-sans font-bold text-base-text text-base">
                  R$&nbsp;{(item.quantity * coffeePrice).toFixed(2)}
                </p>
              </div>

            </div>
          ))}
          
        </div>
        
        <div className="grid grid-cols-2 pb-8 pt-6">
            <div className="font-sans font-semibold text-base-text flex flex-col gap-2">
                <p className="text-sm">Total Itens</p>
                <p className="text-sm">Delivery</p>
                <p className="text-base-title text-xl">Total</p>
            </div>  
            <div className="text-right flex flex-col gap-2">
                <p>{TotalItens}</p>
                <p>R$&nbsp; 3,50</p>
                <p className="font-bold text-xl text-base-subtitle">R$&nbsp; {totalPrice.toFixed(2)}</p>
            </div>
        </div>
        
        <button className="uppercase font-semibold bg-yellow text-white w-full p-4 rounded-md hover:bg-yellow-dark transition-colors cursor-pointer">
          confirmar pedido
        </button>
      </div>
    </div>
  );
}