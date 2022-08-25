import "./NavBar.scss"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton"


const NavBar = () => {
    
    return(
        <div className="navBarStyle">
            <Link to="/"><img src="/assets/nikelogo.png" alt="Nike Logo"/></Link>
            
            <ul>
                <Link to="/"><ul><button>Home</button></ul></Link>
                <Link to="/productos"><ul><button>Productos</button></ul></Link>
                <ToggleButton/>                                            
                <Link to="/contacto"><ul><button>Contacto</button></ul></Link>
                <Link to="/nosotros"><ul><button>Nosotros</button></ul></Link>
                
                <ul><CartWidget/></ul>
            
            </ul>
            
            
        </div>
    )
}

export default NavBar;