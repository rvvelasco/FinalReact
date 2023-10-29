import { useState } from "react"
import "./ItemCount.css"


const ItemCount = ({stock , initial, onAdd}) =>{
    const[quantity, setQuantity] = useState(initial)

    const Incrementar = () =>{
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const Decrementar = () =>{
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Contador">
            <div className="Controles">
                <button className="Boton" onClick={Decrementar}>-</button>
                <h4 className="Numero">{quantity}</h4>
                <button className="Boton" onClick={Incrementar}>+</button>
            </div>
            <div className="BotonCarro" onClick={() => onAdd(quantity)} disable={!stock}>
                    Agregar al carrito
            </div>
        </div>
    )
}

export default ItemCount