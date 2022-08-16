import "./ToggleButton.scss"
import { useState } from "react";
import {DropdownToggle, Dropdown, DropdownItem, DropdownMenu} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"

const ToggleButton = () => {

    const [button, setButton] = useState(false)

    const toggleButton = () => {
        setButton(!button)
    }

  return (
    <div>
        <Dropdown isOpen={button} toggle={toggleButton}>

            <DropdownToggle caret>
                Categorias
            </DropdownToggle>

            <DropdownMenu className="navBar">
                <DropdownItem><Link to="/category/urbana">Urbanas</Link></DropdownItem>
                <DropdownItem><Link to="/category/deportiva">Deportivas</Link></DropdownItem>
            </DropdownMenu>

        </Dropdown>
    </div>
  );
}

export default ToggleButton