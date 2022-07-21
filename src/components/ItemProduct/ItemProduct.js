import "./ItemProduct.scss"

const ItemProduct = ({title, price, image}) => {
    return(
        <div className="cardProduct">
            <img src={`/assets/${image}`} alt="Nikes" />
            <p>{title}</p>
            <span>${price}</span>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct