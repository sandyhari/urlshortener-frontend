import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from "reactstrap";

import routes from "../routes/routes";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar light expand="md" className="font-weight-bold shadow mb-1" style={{backgroundColor:"#191D3A",color:"white"}}>
        <NavLink style={{textDecoration:"none"}} to={routes.dashboard}><h3>Make it Short</h3></NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto font-weight-bold pl-2" navbar>
            <NavLink className="nav-link text-white" to={routes.mainpage}>
              Converter
            </NavLink>
            <NavLink className="nav-link text-white" to={routes.displaytable}>
              UserStats
            </NavLink>
          </Nav>
        </Collapse>
        <NavLink className="nav-link text-white" to={routes.login}>
              Already a member? Login
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Example;
