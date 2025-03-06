import React from 'react'
import "../Styles/Orders.css"
import { useSelector,useDispatch } from 'react-redux'
import { addproductDetails, removeProduct, removeproductDetails } from '../utils/ProductSlice'

const Orders = () => {
    const itemSelector=useSelector((store)=>store.product.productDetails)
    const dispatch=useDispatch()
    console.log(itemSelector)
  return (
    <div className='orderPage'>
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
                <div className='ItemRow'>
                  <img className='imageItemTag' src={itemSelector[item].image} alt='imageTag'/>
                  <div className='itemTagDetails'>
                    <span className='nameTagDetails'>{itemSelector[item].name}</span> 
                    <span>Price: Rs.{itemSelector[item].price}</span>
                    <button className='removeBtn' onClick={()=>{dispatch(removeProduct(itemSelector[item]))}}>Remove</button>
                  </div>
                </div>
                <span className='quantityOrder'><button onClick={()=>{dispatch(removeproductDetails(itemSelector[item]))}}>-</button> {itemSelector[item].quantity} <button onClick={()=>{dispatch(addproductDetails(itemSelector[item]))}}>+</button> </span>
                <span>{`Rs. ${itemSelector[item].quantity * itemSelector[item].price}`}</span>
                </div>
        )
        }
        </div>
    </div>
    <div className='totalContainer'>
      <div className='total'>
        <span>{`Subtotal (${Object.entries(itemSelector).length} items)`} </span>
        {`Rs. ${Object.keys(itemSelector).reduce((acc,item)=>{
          acc+=itemSelector[item].quantity * itemSelector[item].price
          return acc
        },0)}`
        }
    </div>
    <button className='checkOut'> Checkout</button>
    </div>
    </div>
  )
}

export default Orders