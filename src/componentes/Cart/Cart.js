import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity , total} = useContext(CartContext)

    if(totalQuantity === 0) {
         return (
            <div id='mensaje'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option' id='productos'>Productos</Link>
            </div>
         )
    }

    return (
        <div id='carrito'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <div id='botones'>
                <button onClick={() => clearCart()} className='Button' id='limpiar'>Limpiar carrito</button>
                <Link to= '/checkout' className='Option' id='checkout'> Checkout </Link>
            </div>
            
        </div>
    )
}


export default Cart