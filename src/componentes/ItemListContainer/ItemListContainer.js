import "./style.css"
import { useState, useEffect } from "react"
import { getProductById, getProductos} from "../Productos/Productos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import {getDocs , collection , query, where, CollectionReference} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'




const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    useEffect(()=> {
        setLoading(true)
  

    const collectionRef = idCategoria
        ? query(collection(db, 'productos'), where('categoria', '==', idCategoria))
        : collection(db,'productos')

    getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id,...data}
            })
            setProductos(productsAdapted)
        })

        .catch(error => {
            console.log(error)
        })

        .finally(()=> {
            setLoading(false)
        })
    })

    /* useEffect(() => {
        const asyncFunc = idCategoria ? getProductByCategory : getProductos
        
        asyncFunc(idCategoria)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [idCategoria])
 */
    return (
        <div>
            <h1>{greeting}</h1>
            <div id="contenedor">
                <ItemList productos={productos} />
            </div>

        </div>
    )
}

export default ItemListContainer

/* useEffect(() => {
    getProductos()
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
}, [])

return (
    <div>
        <h1>{greeting}</h1>
        <div id="contenedor">
            <ItemList productos={productos} />
        </div>

    </div>
) */