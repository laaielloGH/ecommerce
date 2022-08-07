import { useState } from "react"
import "./ItemCountDetail.scss"


const ItemCountDetail = ({stock, setQuantitySelected}) => {
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