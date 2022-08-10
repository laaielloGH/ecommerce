import { useState, useContext } from "react"
import "./ItemCountDetail.scss"
import { CartContext } from "../Context/CartContext"


const ItemCountDetail = ({stock, setQuantitySelected, productData}) => {
    const {addProductCart} = useContext(CartContext)
    let stockRopa = stock 
    let disable = false
    const [contador, setContador] = useState(1)

    const addNumber = () =>{
        if(contador < stockRopa){
            setContador(contador + 1)
        }else{
            disable=true
        }
        
    }
    const restNumber = () =>{
        if(contador > 1){
            setContador(contador - 1)
        }else{
            disable=true
        }
        
    }

    const onAdd = () =>{
        addProductCart(productData)
        setQuantitySelected(contador)
    }

    return(
        <div className="botonAddDetail">
            <button className="botonCompraDetail" onClick={onAdd}>Agregar al Carro</button>
            <button onClick={restNumber} disabled={disable}>-</button>
            <p>{contador}</p>
            <button onClick={addNumber} disabled={disable}>+</button>
            
           
        </div>    
    )
}

export default ItemCountDetail