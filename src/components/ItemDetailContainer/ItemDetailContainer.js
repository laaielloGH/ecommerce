import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { useParams } from "react-router-dom"
import db from "../../firebaseConfig"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = ({title}) => {
    const {id} = useParams()
    const [detalle, setDetalle] = useState([])


    useEffect(() =>{
        getProduct()
        .then((res) =>{
            setDetalle(res)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
        .finally(()=>{})
        
    }, [id])


    const getProduct = async () =>{
        const docRef= doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    return(
        <div>
            <h1 className="tituloDetalle">{title}</h1>
            <div className="detalleProduct">
                <ItemDetail data={detalle}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer