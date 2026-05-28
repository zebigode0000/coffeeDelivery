import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Carrinho } from '../src/pages/Carrinho/Carrinho'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router () {
    return (
    <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
        </Route>
    </Routes>
    )
}