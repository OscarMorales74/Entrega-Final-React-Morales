import React from "react";
import IconoCarrito from "../IconoCarrito";
import Logo from "../Logo/logo.png";
import "../../../src/app.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="encabezado">
            <nav className="nav">
                <div>
                    <NavLink className="navLogo" to='/'><img src={Logo} alt="logo"/></NavLink>
                    
                </div>
                    <div>
                        <NavLink className="icoCarrito" to='/cart'>
                            <IconoCarrito />
                        </NavLink>
                    </div>
                    <span className="contadorCarrito">2</span>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/'>INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/hogar'>HOGAR</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/figuras'>FIGURAS</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;