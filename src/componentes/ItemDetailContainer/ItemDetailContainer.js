import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();
    console.log("itemId:", itemId);

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                console.log("Data from Firestore:", data);
                const productAdapted = { id: response.id, ...data };
                console.log("Adapted Product Data:", productAdapted);
                setProducto(productAdapted);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    );
}

export default ItemDetailContainer;
