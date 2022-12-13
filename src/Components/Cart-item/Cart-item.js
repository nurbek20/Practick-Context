import React,{useContext} from 'react'
import { MyContext } from '../../Context/My-context';

const CartItem = ({title, images, price, id}) => {
  const {deleteToCard}=useContext(MyContext)

  return (
    <div className='product-item'>
        <img src={images[0]} alt=''/>
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={()=>deleteToCard(id)}>Delete</button>
        
    </div>
  )
}

export default CartItem;
