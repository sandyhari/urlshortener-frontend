import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <Navbar color="light" light expand="md" className="font-weight-bold">
        <Link to={routes.dashboard}>Make it Short</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto font-weight-bold" navbar>
            <Link className="nav-link" to={routes.mainpage}>
              Converter
            </Link>
            <Link className="nav-link" to={routes.displaytable}>
              UserStats
            </Link>
            <Link className="nav-link" to={routes.login}>
              Already a member? Login
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
