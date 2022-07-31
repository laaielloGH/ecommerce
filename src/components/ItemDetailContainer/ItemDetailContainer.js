import { useState, useEffect } from "react"
import products from "../../utils/productsMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"

const ItemDetailContainer = ({title}) => {
    const [detalle, setDetalle] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products[0])
        }, 2000)
    })

    useEffect(() =>{
        getItem 
        .then((res) =>{
            setDetalle(res)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
        .finally(()=>{})
    }, [])
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