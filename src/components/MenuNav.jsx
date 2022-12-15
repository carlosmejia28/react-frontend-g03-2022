import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function MenuNav() {

    return(

        <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/agenda">Agendas</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/agenda-citas"  >
            Agenda Citas
          </NavLink>
        </Nav.Item>
      </Nav>


        
    )
    
}export{MenuNav}