import "./ItemCountDetail.scss"
import ItemCountDetail from "./ItemCountDetail"
import "./ItemDetail.scss"
import {useState} from "react"
import {Link} from "react-router-dom"


const ItemDetail = ({data}) =>{
    const {title, price, image, stock, description, description2} = data

    const [quantitySelected, setQuantitySelected] = useState(0)

    console.log(quantitySelected)
    return (
        <div className="detailProduct">
            <div className="imageProduct">
                <img src={`/assets/${image}`} alt="Nikes" />
            </div>

            <div className="infoProduct">
                <h2>{title}</h2>
                <p className="price">${price}</p>
                <p>Oferta Limitada!</p>

                <div className="detailDescription">
                    <span>Descripcion:</span>
                    <p>{description}</p>
                    <p>{description2}</p>
                </div>   

                <span>Talles</span>
                <div className="talles">
                    <button>38</button>
                    <button>40</button>
                    <button>42</button>
                    <button>43</button>
                </div> 
            </div>
    
            <div className="stockDetalle">
                {
                    quantitySelected > 0 ? <Link to="/cart"><button className="botonFinishCompra">Terminar Compra</button></Link> : <ItemCountDetail stock={stock} setQuantitySelected={setQuantitySelected}/>
                }
                
            </div>    
        </div>
        
    )
}

export default ItemDetail