import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext"
import {Link} from "react-router-dom"
import "./Cart.scss"


const Cart = () => {

    const {cartProducts, clear, removeFromCart, totalCarrito} = useContext(CartContext)

      
    return(
        <>
            {cartProducts.length === 0 ? 
            (   <div className='carritoSinArticulos'>
                    <p>El Carrito esta vacio</p>
                    <Link to="/"><button>Volver a comprar</button></Link>
                </div>)
            : (<div>
                    <div className='tabla'>
                                <div className='title'>
                                    <p>Articulo</p>
                                </div>
                                <div className='cantidad'>
                                    <p>Cantidad</p>
                                </div>
                                <div className='precio'>
                                    <p>Importe</p>
                                </div>
                                <div className='borrar'>
                                    <p>Borrar</p>
                                </div>
                    </div> 
                {cartProducts.map((producto) => {
                    return (
                        <>
                            <div className='tablaCarrito' key={producto.id}>
                                <img className="imagenFinal" src={`/assets/${producto.image}`} alt="" />
                                <div className='articuloTitle'>
                                    <p>{producto.title}</p>
                                </div>
                                <div className='articuloCantidad'>
                                    <p>{producto.contador}</p>
                                </div>
                                <div className='articuloPrecio'>
                                    <p>$ {parseInt(producto.contador) * (producto.price) }</p>
                                </div>
                                <div className='botonBorrar' >
                                    <DeleteIcon onClick={() => removeFromCart(producto.id)}/>
                                </div>
                            </div>
                        </>
                    )
                })
                }
                        <div className='botonesFinalizar'>
                            <div>
                                <div><button className='vaciarCarrito' onClick={()=> clear()}>Vaciar Carrito</button></div>
                            </div>    
                            <div className='buttons-checkout'>
                                <div><Link to="/finish"><button className='finish'>Finalizar Compra</button></Link></div>
                                <div><p className="totalCarrito">Total Carrito: ${totalCarrito}</p></div>
                            </div>
                        </div>    
                </div>) } 
        </>
    )
}

export default Cart