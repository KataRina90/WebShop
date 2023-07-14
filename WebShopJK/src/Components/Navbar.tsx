import React from 'react';

/* export function NavBar () {
  return (
    <Navbar bg="dark" color="blue" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/womens">Women's</Nav.Link>
          <Nav.Link href="/mens">Men's</Nav.Link>
          <Nav.Link href="/kids">Kids</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}; */

export default function Navbar() {
  return <nav className='nav'>
    <a href='' className='site-title'> TShirts</a>
    <ul>
      <li>
        <a href='/women'> Women </a>
      </li>
      <li>
        <a href='/men'> Men </a> 
        </li>
    <li> 
    <a href='/kids'> Kids  </a> 
    </li>
    <li> 
    <a href='/kids'> About  </a> 
    </li>
    </ul>
  </nav>
}

