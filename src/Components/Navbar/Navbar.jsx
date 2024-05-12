import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { assets } from '../../assets/assets';
import { Link, Route, Routes } from 'react-router-dom';


import { About } from '../About/About';
import  Contact from '../Contact/Contact';





const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="nav fixed-top bg-white">
      <Container>
        <Navbar.Brand href="#home">
            <img className='logo1' src={assets.logo2} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" fs-5 ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link href="#page">Page</Nav.Link>
         
            <Nav.Link as={Link} to='/About'>About Us</Nav.Link>
            <NavDropdown title="Country" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
          
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


   <Routes>
    <Route path='/About' element={<About/>}/>
    <Route  path= '/Contact' element={<Contact/>}/>
  
   
    

   </Routes>
    </>
    
    
  )
}

export default NavBar