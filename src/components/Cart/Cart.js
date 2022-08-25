import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext"
import {Link} from "react-router-dom"
import Modal from "../Modal/Modal"
import "./Cart.scss"
import db from "../../firebaseConfig"
import {collection, addDoc} from "firebase/firestore"


const Cart = () => {

    const [showModal, setShowModal] = useState(false)
    const {cartProducts, clear, removeFromCart, totalCarrito} = useContext(CartContext)
    const [success, setSuccess] = useState()
    const [order, setOrder] = useState({

        items: cartProducts.map((product) =>{
            return{
                id: product.id,
                title: product.title,
                price: product.price,
                cantidad: product.contador
            }
        }),
        buyer: {},
        date: new Date().toLocaleDateString(), 
        total: totalCarrito
    })

    const[formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const handleChange = (e) =>{

        setFormData({...formData, [e.target.name] : e.target.value})
        
    }

    const submitData = (e) =>{
        e.preventDefault()
        pushData({...order, buyer:formData})
    }

    const pushData = async (newOrder) =>{
        const orderColecction = collection(db, "ordenes")
        const orderDoc = await addDoc(orderColecction, newOrder)
        setSuccess(orderDoc.id)
    }

    
      
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
                                <div><button className='finish' onClick={() => setShowModal(true)}>Finalizar Compra</button></div>
                                <div><p className="totalCarrito">Total Carrito: ${totalCarrito}</p></div>
                            </div>
                        </div>
                        {showModal && 
                            <Modal title="Formulario de compra" close={success ? () => setShowModal(clear): () => setShowModal()}>
                                {success ? (
                                    <div className='ordenRealizada'>
                                        <h2>Su orden se generó correctamente</h2>
                                        <img src="/assets/check2-circle.svg" alt="Checkout" className='imagenCheck'/>
                                        <p className='color'>¡Gracias por su compra!</p>
                                        <p className='color'>ID de compra: {success}</p>
                                        <Link to="/"><button onClick={()=>clear()}>Volver a inicio</button></Link>
                                    </div>
                                ) : ( 
                                    <form onSubmit={submitData} className="modalDesign">
                                        <input 
                                        type="text" 
                                        name="name" 
                                        placeholder='Ingrese su nombre completo'
                                        value={formData.name}
                                        onChange={handleChange}
                                        />
                                        <input 
                                        type="number" 
                                        name="phone" 
                                        placeholder='Ingrese su numero de telefono'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        />
                                        <input 
                                        type="email" 
                                        name="email" 
                                        placeholder='Ingrese su email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        />
                                        <button type="submit">Enviar</button>
                                    </form>
                                )}
                            </Modal>
                        }     
                </div>) } 
        </>
    )
}

export default Cart