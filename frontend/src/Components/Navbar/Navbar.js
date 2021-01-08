import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Login from '../LoginForm/Login';
import Signup from '../SignupForm/Signup';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';



const Navbar1 = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <section>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i className="fas fa-shuttle-van">RVbnb</i>
                </h1>
                <div className="menu-icon">
                    
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                      <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                      </li>
                      )
                    })}
                    <li>
                        <a className="nav-links" href="#" onClick={handleShow1} >
                            Sign up
                        </a>
                    </li>
                        
                    <li>
                          <a className="nav-links" href="#" onClick={handleShow} >
                            Login
                          </a>
                    </li>
              </ul>
        </nav>
        <Login show={show} onHide={handleClose}  />
        <Signup show={show1} onHide={handleClose1} />
        {/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">VanBnB</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/my-vans">My Vans</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/my-reservations">See all my Reservations</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}
    
        </section>
        
    )
}


export default Navbar1;