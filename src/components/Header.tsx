import Logo from "../assets/Logo.svg";
import { ShoppingCartIcon, MapPinIcon } from "@phosphor-icons/react";
import { CoffeeCartContext } from '../../src/contexts/Contexts'
import { useContext } from "react";
import { NavLink } from 'react-router-dom'


export function Header() {

const context = useContext(CoffeeCartContext);

if (!context) {
  throw new Error("CoffeeCard deve ser usado dentro de um CoffeeCartProvider");
}

const { coffeeNumberCart } = context;

  return (
    <div className="w-full flex items-center justify-between">
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="flex items-center gap-2 font-sans">
        <div className="flex items-center text-purple bg-purple-light p-1 rounded-sm">
          <MapPinIcon size={20} />
          Guarulhos
        </div>
        <NavLink to="/Carrinho" className="relative text-yellow bg-yellow-light p-1">
        <span className="absolute bottom-5 left-6 bg-yellow-dark rounded-full w-4 h-4 flex justify-center items-center font-bold text-white text-xs">{coffeeNumberCart}</span>
          <ShoppingCartIcon size={20} />
        </NavLink>
      </div>
    </div>
  );
}
