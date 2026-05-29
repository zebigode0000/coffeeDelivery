import { CoffeeCard } from './CoffeeCard'
import Coffee1 from '../../../assets/Coffee1.png'
import Coffee2 from '../../../assets/Coffee2.png'
import Coffee3 from '../../../assets/Coffee3.png'
import Coffee4 from '../../../assets/Coffee4.png'
import type { Coffee } from '../../../Types'

export function Coffees() {

    const coffeeList: Coffee[] = [
    {
        id: 1,
        img: Coffee1,
        type: ['tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos'

    }, {
        id: 2,
        img: Coffee2,
        type:['tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional'
    }, {
        id: 3,
        img: Coffee3,
        type: ['tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa'
    }, {
        id: 4,
        img: Coffee4,
        type: ['tradicional ', ' Gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo'
    }, 
    ]  
    
    return(
        <div className='w-full'>
            <div>
                <h1 className="font-title text-2xl font-semibold">Nossos Cafés</h1>
            </div>
            <div className='grid grid-cols-4 w-full gap-4 pt-20'>
                {coffeeList.map(card => (
                <CoffeeCard 
                    key={card.id} 
                    coffee={card}/>
                ))}
            </div>
        </div>
            
        
    )
}