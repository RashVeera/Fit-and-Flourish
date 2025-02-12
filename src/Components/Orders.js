import React from 'react'
import "../Styles/Orders.css"
import { useSelector } from 'react-redux'

const Orders = () => {
    const itemSelector=useSelector((store)=>store.product.productDetails)
  return (
    <div className='orderContainer'>
        <div className='orderHeader'>
        <span>Items</span>
        <span>Quantity</span>
        <span>Price</span>
        </div>
        <div className='itemDetails'>
        {
        Object.keys(itemSelector).map((item)=>
            <div className='itemDetail'>
                <span>{itemSelector[item].name}</span>
                
                <span>{itemSelector[item].quantity}</span>
                <span>{`Rs. ${itemSelector[item].price}`}</span>
                </div>
        )
        }
        </div>
    </div>
  )
}

export default Orders