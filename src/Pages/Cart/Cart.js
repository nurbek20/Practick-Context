import React,{useContext, useState} from 'react'
import { MyContext } from './../../Context/My-context';
import CartItem from './../../Components/Cart-item/Cart-item';
import Order from "./../../Components/Order/Order"

const Cart = () => {
  const [modalShow, setModalShow] = useState(false);
    const { cart } = useContext(MyContext)
    const onOrder = () => {
        setModalShow(true)
    }
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
      <Order show={modalShow}
                onHide={() => setModalShow(false)} />
            <button onClick={onOrder}>оформить товар</button>
      
    </div>
  )
}

export default Cart
