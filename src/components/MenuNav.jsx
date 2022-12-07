import React from "react";
import { Link } from "react-router-dom";

function MenuNav() {

    return(
        <div>
            <ul>
                <li>
                    <Link to="/"> inicio</Link>
                </li>
                <li>
                <Link to="/contacto">contacto</Link>
                </li>
                <li>Ayuda</li>
            </ul>
        </div>
    )
    
}export{MenuNav}