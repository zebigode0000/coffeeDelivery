import { CurrencyDollarIcon, MapPinIcon, TimerIcon } from "@phosphor-icons/react";
import SuccedImage from '../assets/SuccedImage.png'

export function SuccedPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 gap-4 ">
            <div>
                <h1 className="font-title text-2xl text-yellow-dark font-bold">Uhu! Pedido confirmado</h1>
                <p className="text-base-text">Agora é só aguardar que logo o café chegará até você</p>
            <div className="bg-gradient-to-br p-0.5 from-yellow-dark to-purple rounded-bl-4xl rounded-tr-4xl rounded-tl-xl rounded-br-xl mt-10">
                <div className="bg-background flex flex-col gap-4  p-10 rounded-bl-4xl rounded-tr-4xl rounded-tl-xl rounded-br-xl text-base-text">
                    <div className="flex items-center gap-4">
                        <span className="bg-purple rounded-full p-1 flex items-center justify-center">
                            <MapPinIcon className="text-white  flex justify-center items-center" size={16}/>
                        </span>
                        <div className="leading-none">
                            <p>Entrega em <span className="font-bold">Rua João Daniel Martinelli, 102</span> <br /> Farrapos - Porto Alegre, RS</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-yellow rounded-full p-1 flex items-center justify-center">
                            <TimerIcon className="text-white  flex justify-center items-center" size={16}/>
                        </span>
                        <div className="leading-none">
                            <p>Previsão de entrega <br /> <span className="font-bold">20 min - 30 min</span> </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-yellow-dark rounded-full p-1 flex items-center justify-center">
                            <CurrencyDollarIcon className="text-white flex justify-center items-center" size={16}/>
                        </span>
                        <div className="leading-none">
                            <p>Pagamento na entrega <br /> <span className="font-bold">Cartão de Crédito</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="p-10">
                <img src={SuccedImage} alt="" />
            </div>
        </div>
    )
}