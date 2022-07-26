import Item from "../Item/Item"

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map((productos)=>{
                return <Item data={productos} key={productos.id}/>
            })}
        </>
    )
}

export default ItemList