import "./Item.scss"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({data}) => {
    const {title, price, image, stock} = data
    
    return(
        <div className="cardProduct">
            <img src={`/assets/${image}`} alt="Nikes" />
            <p>{title}</p>
            <span>${price}</span>
            <p>Stock: {stock}</p>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </div>
    )
}

export default Item