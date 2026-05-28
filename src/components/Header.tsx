import Logo from "../assets/Logo.svg";
import { ShoppingCartIcon, MapPinIcon } from "@phosphor-icons/react";

export function Header() {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex items-center gap-2 font-sans">
        <div className="flex items-center text-purple bg-purple-light p-1 rounded-sm">
          <MapPinIcon size={20} />
          Guarulhos
        </div>
        <a href="#" className="text-yellow bg-yellow-light p-1">
          <ShoppingCartIcon size={20} />
        </a>
      </div>
    </div>
  );
}
