import "./Item.scss"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({data}) => {
    const {title, price, image, stock, id} = data
    
    return(
        <Link to={`/productos/${id}`}>
            <div className="cardProduct">
                <img src={`/assets/${image}`} alt="Nikes" />
                <p>{title}</p>
                <span>${price}</span>
                <p>Stock: {stock}</p>
                <ItemCount stock={stock}/>
                <button>Comprar</button>
            </div>
        </Link>
    )
}

export default Item