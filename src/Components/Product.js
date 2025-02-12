import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../Styles/Product.css"
import { addproductDetails,removeproductDetails } from '../utils/ProductSlice'
import { Link } from 'react-router'

const Product = ({item}) => {
    const dispatch=useDispatch()
    const selector=useSelector(store=>store.product.productDetails)
    console.log(selector)

  return (
    <div className='product'>
    <div className='productDisplay'>
    <img src={item.image}  alt='productImage'/>
    <div className='addBtn'>
     
    <button className='decr' onClick={()=>{dispatch(removeproductDetails(item))}}>-</button>
    <span className='value'>{selector[item.name]?selector[item.name].quantity:0}</span>
    <button className='incr' onClick={()=>{dispatch(addproductDetails(item))}}>+</button>
      </div>
      </div>
    <Link className='itemName' to={`/items?product=${item.name}`}> <p>{item.name}</p></Link>
    <p>{`Rs. ${item.price}`}</p>
    </div>
  )
}

export default Product