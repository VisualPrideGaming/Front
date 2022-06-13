import React, { useState } from "react";
import  skull  from '../../images/calavera.png';
import { Nav, NavDropdown, Offcanvas } from "react-bootstrap"
import Search from "../searcher/search";

function PageOption({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Nav.Item className="Header">
            <Nav.Link variant="primary" onClick={handleShow}>
                {name}
            </Nav.Link>
        </Nav.Item>
        <Offcanvas show={show} onHide={handleClose} {...props} className="Canvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>¿Quienes Somos?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <h1>Bienvenido a Gameflix</h1>
              <p>Somos la empresa más puntera en la gestión de datos de videojuegos 
                  para que los usuarios puedan almacenar, seleccionar y comentar sus juegos favoritos.</p>
              <p>Conócenos un poco mas pulsado <a href="/nosotros">aquí</a>.</p>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

const Header = () => {

    return(
        <header>
            <Nav fill variant="pills" activeKey="1">
                <a href="/"><img src={skull} alt="skull" width="50" height="50" className="App-logo"/></a>
                <Nav.Item>
                    <Nav.Link href="/inicio">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/minijuegos">Minijuegos</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <PageOption placement="end" name="¿Quienes somos?" />
                </Nav.Item>
                <NavDropdown title="Admin" id="nav-dropdown">
                    <NavDropdown.Item href="/perfil">Ver Perfiles</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Gestión de perfiles</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Search/>
                </Nav.Item>
            </Nav>
        </header>
    )
}
export default Header;