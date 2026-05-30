import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinAreaIcon,
} from "@phosphor-icons/react";
import { MoneyIcon } from "@phosphor-icons/react/dist/ssr";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutFormSchema = z.object({
  cep: z.string().min(8, "the CEP must have 8 digits"),
  address: z.string().min(1, "the address is required"),
  number: z.string().min(1, "the number is required"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "neighborhood is obrigatory"),
  city: z.string().min(1, "the city is required"),
});

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

export function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log("dados validos", data);
  };

  return (
    <div>
      <h1 className="font-title text-base-title text-xl font-bold mb-4">
        Complete seu pedido
      </h1>
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

        
        <form id="form-checkout" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-2 pt-6">
          
         
          <div className="col-span-3 flex flex-col gap-1">
            <input
              className="bg-base-input font-sans font-semibold text-base-label border border-base-hover p-2 rounded-md w-full"
              type="text"
              {...register('cep')}
              placeholder="CEP"
            />
            {errors.cep && <span className="text-xs text-red-500 font-sans pl-1">{errors.cep.message}</span>}
          </div>

         
          <div className="col-span-3 flex flex-col gap-1">
            <input
              className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md border-base-hover w-full"
              type="text"
              {...register('address')}
              placeholder="Address"
            />
            {errors.address && <span className="text-xs text-red-500 font-sans pl-1">{errors.address.message}</span>}
          </div>
          
         
          <div className="col-span-1 flex flex-col gap-1">
            <input
              className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md border-base-hover w-full"
              type="number"
              {...register('number', { valueAsNumber: true })} 
              placeholder="Number"
            />
            {errors.number && <span className="text-xs text-red-500 font-sans pl-1">{errors.number.message}</span>}
          </div>

          
          <div className="col-span-2 flex flex-col gap-1">
            <input
              className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md border-base-hover w-full"
              type="text"
              {...register('complement')}
              placeholder="Complement"
            />
          </div>

          
          <div className="col-span-1 flex flex-col gap-1">
            <input
              className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md border-base-hover w-full"
              type="text"
              {...register('neighborhood')}
              placeholder="Neighborhood"
            />
            {errors.neighborhood && <span className="text-xs text-red-500 font-sans pl-1">{errors.neighborhood.message}</span>}
          </div>

          
          <div className="col-span-2 flex flex-col gap-1">
            <input
              className="bg-base-input font-sans font-semibold text-base-label border p-2 rounded-md border-base-hover w-full"
              type="text"
              {...register('city')}
              placeholder="City"
            />
            {errors.city && <span className="text-xs text-red-500 font-sans pl-1">{errors.city.message}</span>}
          </div>

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
            <CreditCardIcon size={22} className="text-purple" />
            Cartão de crédito
          </a>
          <a href="" className="flex items-center bg-base-button p-4 uppercase text-xs text-center rounded-md gap-2 border border-white hover:border-purple hover:bg-purple-light">
            <BankIcon size={22} className="text-purple" />
            cartão de débito
          </a>
          <a href="" className="flex items-center bg-base-button p-4 uppercase text-xs text-center rounded-md gap-2 border border-white hover:border-purple hover:bg-purple-light">
            <MoneyIcon size={22} className="text-purple" />
            dinheiro
          </a>
        </div>
      </div>
    </div>
  );
}