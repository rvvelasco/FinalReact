import { Link } from 'react-router-dom'
import './style.css'
import { getProductos } from '../Productos/Productos'


const Item = ({id, nombre, precio, categoria, img, stock}) => {
    return(
        <article className='contenido'>
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img id="productosImg" src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item