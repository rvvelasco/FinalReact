import React from "react";
import DetalleRenglon from "./DetalleRenglon";

export default function Detalle({idpedido, data, total}) {
  
  return (
    <div>
      <h2>Muchas gracias por tu compra</h2>
      <p>Tu número de pedido es: {idpedido}</p>
      {data.map(item => <DetalleRenglon key={item.id} item={item}/>)}
      <p>Total de la Compra: ${total}</p>
    </div>
  );
}