import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import products from "../../utils/productsMock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({calzado}) => {

    const {category} = useParams()
    // const filterByCategory = products.filter((products) => products.category === category)
    const [listProducts, setListProducts] = useState([])
   

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            if(category === "Urbanas" || category === "Deportivas"){
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

            filterByCategory()
            
    }, [])

    const filterByCategory = () =>{
        products.some((producto)=>{
            if(producto.category == category){
                setListProducts(producto)
            }
        })
    }


    
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