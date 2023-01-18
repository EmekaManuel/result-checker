import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"


const NavBar = () => {
  return (


<Navbar className='navv' expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand className='nav-options' href="#home"> <h6>M-Learn</h6></Navbar.Brand>
        <Navbar.Toggle className='nav-nav' aria-controls="basic-navbar-nav"></Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="justify-content-end"  style={{width:'100%'}} >
            <Nav.Link className='nav-options'  href="#home" to = '/' as = {NavLink}> <h6>Home</h6></Nav.Link>
            <Nav.Link className='nav-options'  href="#link" to = '/calculateGP' as = {NavLink}> <h6>Calculate GP</h6> </Nav.Link>
            <Nav.Link className='nav-options'  href="#link" to = '/calculateGP' as = {NavLink}> <h6>Sign Up/Login</h6> </Nav.Link>
           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default NavBar 