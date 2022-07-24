import { useState } from "react"
import "./ItemCount.scss"



const ItemCount = ({stock}) => {
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

    return(
        <div className="botonAdd">
            <button onClick={restNumber} disabled={disable}>-</button>
            <p>{contador}</p>
            <button onClick={addNumber} disabled={disable}>+</button>
        </div>    
    )
}

export default ItemCount