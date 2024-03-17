import React,{useState} from 'react'

const Header = (props) => {

 

  return (
    <div className='flex shopping-card pos'>
      <div onClick={()=>{
        props.handleShow(false)
      }}
        >Shopping Cart</div>
      <div onClick={()=>{
        props.handleShow(true)
      }}>Cart
        <sup>{props.count}</sup>
      </div>
    </div>
  )
}

export default Header
