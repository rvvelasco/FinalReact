import React from 'react'

export default function DetalleRenglon({item}) {
  
  return (
    <div>
      <p>{item.titulo}</p>
      <p>{item.color}</p>
      <p>$ {item.precio}</p>
      <p>Cant: {item.cantidad}</p>
      <p>SubTotal: ${item.cantidad*item.precio}</p>
    </div>
  )
}
