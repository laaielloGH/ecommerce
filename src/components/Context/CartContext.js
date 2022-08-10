import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState ([])
    console.log(cartProducts)
    const addProductCart = (productos) =>{
        setCartProducts(cartProducts => [...cartProducts, productos])
    }

    const clear = () =>{
        setCartProducts([])
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductCart,
        clear
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}