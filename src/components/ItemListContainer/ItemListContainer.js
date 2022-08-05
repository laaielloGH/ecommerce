import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import products from "../../utils/productsMock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({calzado}) => {

    const {categoryid} = useParams()
    console.log(categoryid)
    const filterByCategory = products.filter((productos) => productos.category === categoryid)
    const [listProducts, setListProducts] = useState([])


    const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            if(categoryid === "urbana" || categoryid === "deportiva"){
                resolve (filterByCategory)
            }
            else{
                resolve(products)
            }
        },2000) 
    })

    useEffect(() =>{
        getProducts
            .then((response)=>{
                setListProducts(response) 
            })
            .catch((err)=>{
                console.log("Hubo un fallo")
            })
            .finally(()=>{})
            
    }, [categoryid])




    
    return(
        <div>
            <h1 className="tituloNike">{calzado}</h1>
            <div className="listProducts">
                <ItemList dataProducts={listProducts}/>
            </div>
        </div>
    )
}

export default ItemListContainer;