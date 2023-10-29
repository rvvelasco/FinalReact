import React , {useState} from 'react'
import { Link } from 'react-router-dom'


export default function CartItem({id, titulo, precio, cantidad, quantity, nombre}) {
  const [subTotal, setSubTotal] = useState(precio * quantity);


  return (
    <div className='renglon'>
      <p className='reng-titulo'><Link to={`/Productos/${id}`}>{titulo}</Link></p>
      <p className='reng-nombre'>Producto: {nombre}</p>
      <p className='reng-precio'>Precio: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio)}</p>
      <p className='reng-cantidad'>Cantidad: {quantity}</p>
      <p className='reng-subtotal'>Subtotal: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio*quantity)}</p>
    </div>
  )
}