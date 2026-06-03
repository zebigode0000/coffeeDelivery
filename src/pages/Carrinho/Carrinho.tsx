import {AddressForm} from '../Carrinho/components/AddressForm'
import { Conformation } from './components/Confirmation'

export function Carrinho() {
    return (
        <div className='pt-14 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6'>
            <AddressForm />
            <Conformation/>
        </div>
    )
}