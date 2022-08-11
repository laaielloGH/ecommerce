import { useState, useEffect } from "react"
import products from "../../utils/productsMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({title}) => {
    const {id} = useParams()
    const [detalle, setDetalle] = useState([])


    const getItem = new Promise((resolve, reject) => {
        
        resolve(products.some())
        
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

        filterById()
        
    }, [])

    const filterById = () =>{
        products.some((producto) =>{
            if(producto.id == id){
                setDetalle(producto)
            }
        })
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