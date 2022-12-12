import React from 'react'

const CartItem = ({title, images, price, id}) => {
  return (
    <div className='product-item'>
        <img src={images[0]} alt=''/>
        <p>{title}</p>
        <p>{price}</p>
        <button>Delte</button>
    </div>
  )
}

export default CartItem;
