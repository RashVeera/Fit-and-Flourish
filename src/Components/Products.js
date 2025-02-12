import React from 'react'
import data from "../utils/mockData.json"
import "../Styles/Product.css"
import Product from './Product'

const Products = () => {
  return (
    <div className='productContainer'>
      {
        data.products.map((item)=>(  
         <Product item={item}/>
        ))
      }
    </div>
  )
}

export default Products