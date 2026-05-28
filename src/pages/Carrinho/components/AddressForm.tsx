import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinAreaIcon,
} from "@phosphor-icons/react";
import { MoneyIcon } from "@phosphor-icons/react/dist/ssr";

export function AddressForm() {
  return (
    <div>
      <h1 className="font-title text-base-title text-xl font-bold mb-4">Complete seu pedido</h1>
      <div className="p-10 bg-base-card rounded-md">
        <div className="flex items-center gap-4">
          <MapPinAreaIcon size={30} className="text-yellow" />
          <div className="leading-none font-sans">
            <p className="text-lg text-base-title">Endereço de Entrega</p>
            <p className="text-base-subtitle">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <form action="" className="grid grid-cols-3 gap-2 pt-6">
          <input
            className="bg-base-input font-sans font-semibold text-base-label border border-base-hover p-2 rounded-md col-span-3"
            type="number"
            name=""
            id=""
            placeholder="CEP"
          />
          <input
            className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md col-span-3 border-base-hover"
            type="text"
            placeholder="Address"
            name=""
            id=""
          />
          <input
            className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md col-span-1 border-base-hover"
            type="number"
            placeholder="Number"
            name=""
            id=""
          />
          <input
            className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md col-span-2 border-base-hover"
            type="text"
            placeholder="Complement"
            name=""
            id=""
          />
          <input
            className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md col-span-1 border-base-hover"
            type="text"
            placeholder="Neighborhood"
            name=""
            id=""
          />
          <input
            className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md col-span-2 border-base-hover"
            type="text"
            placeholder="City"
            name=""
            id=""
          />
        </form>
      </div>
      <div className="p-10 bg-base-card mt-10 rounded-md">
        <div className="flex items-center gap-4">
          <CurrencyDollarIcon size={30} className="text-purple" />
          <div className="leading-none">
            <p className="text-base-title text-lg">Pagamento</p>
            <p className="text-base-subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-base-text pt-6">
          <a href="" className="flex items-center bg-base-button p-4 uppercase text-xs text-center rounded-md gap-2 border border-white hover:border-purple hover:bg-purple-light">
            <CreditCardIcon size={22} className="text-purple"/>
            Cartão de crédito
          </a>
          <a href="" className="flex items-center bg-base-button p-4 uppercase text-xs text-center rounded-md gap-2 border border-white hover:border-purple hover:bg-purple-light">
            <BankIcon size={22} className="text-purple"/>
            cartão de débito
          </a>
          <a href="" className="flex items-center bg-base-button p-4  uppercase text-xs text-center rounded-md gap-2 border border-white hover:border-purple hover:bg-purple-light">
            <MoneyIcon size={22} className="text-purple" />
            dinheiro
          </a>
        </div>
      </div>
    </div>
  );
}
