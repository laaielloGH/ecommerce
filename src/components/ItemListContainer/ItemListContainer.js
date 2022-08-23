import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({calzado}) => {

    const {categoryid} = useParams()

    const [listProducts, setListProducts] = useState([])
    
    
    useEffect(() =>{
       const queryCollection = collection(db, "productos")
       if(categoryid){
           const queryFilter = query(queryCollection, where("category", "==", categoryid))
           getDocs(queryFilter)
           .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
       }
       else{
           getDocs(queryCollection)
           .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
       }

            
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