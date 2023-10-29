import React from 'react'
import cart from "./Assets/cart.svg"
import "./CartWidget.css"
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () =>{
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className='CartImg' src={cart} alt='cart-widget'/>
      { totalQuantity }
    </Link>
  )
}


export default CartWidget