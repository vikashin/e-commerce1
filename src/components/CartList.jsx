import React, { useEffect, useState } from 'react'
import '../App.css'

const CartList = ({cart,addTocart1}) => {
    let price=0;
    cart.map((cartItem,cartIndex)=>{
        price+=(cartItem.quantity*cartItem.price)
    })
    
    const [CART,setCart]=useState([])

    useEffect(()=>{
        setCart(cart)
    },[cart])
  return (
    <div>
      {CART.map((cartItem,cartIndex)=>{
        return (
            <div>
                <img src={cartItem.url} width={40}></img>
                <span> {cartItem.name} </span>
                <button onClick={()=>{
                    const _CART=CART.map((item,index)=>{
                        if(index===cartIndex && item.quantity>0){
                            return {...item,quantity:item.quantity-1}
                        }
                        else{
                            return item
                        }
                    })
                    setCart(_CART)
                    addTocart1(_CART)
                }

                }>-</button>
                <span> {cartItem.quantity} </span>
                <button onClick={()=>{
                    const _CART=CART.map((item,index)=>{
                        
                       return cartIndex===index?  {...item,quantity:item.quantity+1}:item
                        
                    })
                    setCart(_CART)
                    addTocart1(_CART)
                    
                }}>+</button>
                <span> Rs.{cartItem.price*cartItem.quantity} </span>
            </div>
        )
      })}
      {
        price?<p>Total price is:{price}</p>:<p></p>
     }
    </div>
  )
}

export default CartList
