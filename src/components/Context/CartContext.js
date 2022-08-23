import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState ([])
    const [cantidad, setCantidad] = useState (0)
    const [totalCarrito, setTotalCarrito] = useState (0)
    
    

    const addProductCart = (productos) =>{
        const productInCart = cartProducts.find( item => item.id === productos.id )
        if (productInCart){
         const copyArray = cartProducts.map ((item) => {
            if(item.id === productos.id){
                return {
                    ...item,
                    contador: item.contador + productos.contador,
                }
            }
            else{
              return item
            }})
            setCartProducts(copyArray)}
         else{
            setCartProducts([...cartProducts, productos])
         }
         setCantidad (cantidad + productos.contador);
         setTotalCarrito(
            totalCarrito + parseInt(productos.contador) * (productos.price)
         );
    };
        
    const clear = () =>{
        setCartProducts([]);
        setTotalCarrito(0);
        setCantidad(0);
    }

    const removeFromCart = (id) =>{
        const prod = cartProducts.find((product) => product.id === id);
        setTotalCarrito(
            totalCarrito - parseInt(prod.contador) * (prod.price)
        );
        setCantidad( cantidad - prod.contador )
        const newCart = cartProducts.filter((producto) => producto.id !== id)
        setCartProducts(newCart)
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductCart,
        clear,
        removeFromCart,
        cantidad,
        totalCarrito
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}