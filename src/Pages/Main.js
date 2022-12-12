import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home'
import Cart from "./Cart/Cart"
import Product from "../Components/Product/Product"

const Main=()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/product/:product' element={<Product/>} />
            </Routes>
        </div>
    )
}
export default Main;