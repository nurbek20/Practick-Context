import React,{useContext} from 'react'
import { MyContext } from './../../Context/My-context';
import CartItem from './../../Components/Cart-item/Cart-item';

const Cart = () => {
  const {cart}=useContext(MyContext)
  console.log("cart>>>", cart)
  return (
    <div>
      <h1>Cart</h1>
      <div className='product'>
        {
          cart.map(elem=>{
            return (<CartItem {...elem} />)
          })
        }
      </div>
      
    </div>
  )
}

export default Cart
