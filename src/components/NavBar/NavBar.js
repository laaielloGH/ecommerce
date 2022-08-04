import "./NavBar.scss"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <div className="navBarStyle">
            <Link to="/"><img src="/assets/nikelogo.png" alt="Nike Logo"/></Link>
            
            <ul class="dropdown">
                <Link to="/"><ul><button>Home</button></ul></Link>
                <Link to="/productos"><ul><button>Productos</button></ul></Link>                                            
                <Link to="/category/:urbana"><ul><button>Urbanas</button></ul></Link>                                            
                <Link to="/category/:deportiva"><ul><button>Deportivas</button></ul></Link>                                            
                <Link to="/contacto"><ul><button>Contacto</button></ul></Link>
                <Link to="/Nosotros"><ul><button>Nosotros</button></ul></Link>
                <ul><button className="logIn">Log In</button></ul>
                <ul><CartWidget/></ul>
            
            </ul>
            
            
        </div>
    )
}

export default NavBar;