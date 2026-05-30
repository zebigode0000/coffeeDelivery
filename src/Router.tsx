import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Carrinho } from '../src/pages/Carrinho/Carrinho'
import { SuccedPage } from './pages/SuccedPage'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router () {
    return (
    <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
            <Route path='/SuccedPage' element={<SuccedPage/>}/>
        </Route>
    </Routes>
    )
}