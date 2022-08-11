import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState ([])
    console.log(cartProducts)


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
    }

    const clear = () =>{
        setCartProducts([])
    }

    const removeFromCart = (id) =>{
        const newCart = cartProducts.filter((producto) => producto.id !== id)
        setCartProducts(newCart)
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductCart,
        clear,
        removeFromCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}