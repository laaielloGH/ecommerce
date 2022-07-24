import ItemProduct from "../ItemProduct/ItemProduct";
import "./ItemListContainer.scss"

const ItemListContainer = ({calzado}) => {
    return(
        <div>
            <h1 className="tituloNike">{calzado}</h1>
            <div className="listProducts">
                <ItemProduct title="Nike Negra" price={15000} image={`nikenegra.jpg`} stock={6}/>
                <ItemProduct title="Nike Blanca" price={12000} image={`nikeblanca.jpg`} stock={10}/>
                <ItemProduct title="Nike Roja" price={17000} image={`nikeroja.jpg`} stock={4}/>
            </div>
            <div className="listProducts2">
                <ItemProduct title="Nike Verde" price={18000} image={`nikeverde.jpg`} stock={9}/>
                <ItemProduct title="Nike Roja2" price={24000} image={`nikeroja2.jpg`} stock={5}/>
                <ItemProduct title="Nike Celeste" price={16000} image={`nikeceleste.jpg`} stock={12}/>
            </div>
        </div>
    )
}

export default ItemListContainer;