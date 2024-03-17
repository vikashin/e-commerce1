import React from 'react'
import '../App.css'

const ProductList = ({product,addTocart}) => {
  return (
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
            return (
                <div style={{width:'50%'}}>
                    <div className='product-item'>
                        <img src={productItem.url} width='60%'></img>
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <p>Rs. {productItem.price}</p>
                        <button onClick={()=>{
                            addTocart(productItem)
                        }}>Add To Cart</button>
                    </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default ProductList
