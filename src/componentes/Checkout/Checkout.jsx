import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";
import { useForm } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"
import Detalle from "./Detalle";

export default function Checkout() {

  const {carrito, montoTotal, clearItems} = useContext(CartContext)
  const { register, handleSubmit } = useForm();
  const [idpedido, setIdpedido] = useState("")
  const [compra, setCompra] = useState([])
  const [total, setTotal] = useState([])


  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: montoTotal()
    }

    
    const pedidosRef = collection(db, 'pedidos')
    
    setIdpedido("Xm7pIWVd5iPUP5jfgkek")
    setCompra(carrito)
    setTotal(montoTotal())

  }


  if (idpedido) {
    return (
        <Detalle idpedido={idpedido} data={compra} total={total}/>
    )
  }

  return (

    <div>
      <h2>Finalizar Compra</h2>

        <form onSubmit={handleSubmit()}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", { required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="text" placeholder="Ingresá tu apellido" {...register("apellido", { required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email", { required: true})} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono", { required: true})} />

            <button type="submit">Comprar</button>

        </form>
    </div>

  )
}
