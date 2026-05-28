import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import banner from "../../assets/banner.png";
import { Coffees } from "./components/Coffees";

export function Home() {
  return (
    <>
    <div className="grid grid-cols-2 mt-30 ">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <h1 className="font-title text-4xl text-base-title">
            Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base-text font-sans font-semibold">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
            </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-base-text font-sans">
            <div className="flex gap-2 items-center">
              <ShoppingCartIcon
                size={30}
                className="text-white bg-yellow-dark rounded-full p-1.5"
              />
              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-2 items-center">
              <TimerIcon
                size={30}
                className="text-white bg-yellow rounded-full p-1.5"
              />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="flex gap-2 items-center">
              <PackageIcon
                size={30}
                className="text-white bg-base-title rounded-full p-1.5"
              />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="flex gap-2 items-center">
              <CoffeeIcon
                size={30}
                className="text-white bg-purple-dark rounded-full p-1.5"
              />
              <p>O café chega fresquinho até você</p>
            </div>
        </div>
      </div>
      <div>
        <img src={banner} className="m-auto" alt="" />
      </div>
    </div>
    <section>
        <Coffees />
      </section>
    </>
  );
}
