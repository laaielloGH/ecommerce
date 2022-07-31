import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data}) =>{
    const {title, price, image, stock, description, description2} = data
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
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div> 
            </div>

            <div className="info2Product">
                <button>Comprar</button>
            </div>    
            <div className="stockDetalle">
                <span>Cantidad</span>
                <ItemCount stock={stock}/>
            </div>    
        </div>
        
    )
}

export default ItemDetail