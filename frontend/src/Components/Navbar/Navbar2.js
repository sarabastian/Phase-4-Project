
import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Login from '../LoginForm/Login';
import Signup from '../SignupForm/Signup';


class Navbar2 extends React.Component {

    state = {

        show: false,
        show1: false
    }

    // logout = () => {
    //     localStorage.clear();
    // }

    handleShow = () => {
        this.setState({
          show: true
        })
    }

    handleShow1 = () => {
        this.setState({
            show1: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleClose1 = () => {
        this.setState({
            show1: false
        })
    }

    render() {
        return(

            <section>
                {/* {localStorage.exists ?  */}
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i className="fas fa-shuttle-van">RVnB</i>
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
                        <a className="nav-links" href="#" onClick={() => this.handleShow1()} >
                            Sign up
                        </a>
                    </li>
                        
                    <li>
                          <a className="nav-links" href="#" onClick={() => this.handleShow()} >
                            Login
                          </a>
                    </li>
              </ul>
              <Login show={this.state.show} onHide={this.handleClose}  />
        <Signup show={this.state.show1} onHide={this.handleClose1} />
        </nav>

      
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">RVnB</Navbar.Brand>
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
        <NavDropdown.Item href="/" >Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 
</section>
        )
    }




};

export default Navbar2;