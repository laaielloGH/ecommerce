import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = ({calzado}) => {
    return(
        <div>
            <h1>{calzado}</h1>
            <div className="listProducts">
                <ItemProduct title="Nike Negra" price={15000} image={`nikenegra.jpg`}/>
                <ItemProduct title="Nike Blanca" price={12000} image={`nikeblanca.jpg`}/>
                <ItemProduct title="Nike Roja" price={17000} image={`nikeroja.jpg`}/>
            </div>
            <div className="listProducts2">
                <ItemProduct title="Nike Verde" price={18000} image={`nikeverde.jpg`}/>
                <ItemProduct title="Nike Roja2" price={24000} image={`nikeroja2.jpg`}/>
                <ItemProduct title="Nike Celeste" price={16000} image={`nikeceleste.jpg`}/>
            </div>
        </div>
    )
}

export default ItemListContainer;