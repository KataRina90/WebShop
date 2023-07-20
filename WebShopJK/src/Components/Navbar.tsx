
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
import React from 'react'
 export default function Navbar() {
  return <nav className='nav'>
    <a href='/' className='site-title'> TShirts</a>
    <ul>
 <CustomLink href='/'> Home </CustomLink>
 <CustomLink href='/about'> About </CustomLink>
 <CustomLink href='/women'> Women </CustomLink>
 <CustomLink href='/men'> Men </CustomLink>
 <CustomLink href='/kids'> Kids </CustomLink>
 </ul>
  </nav>
} 
interface CustomLinkProps {
  href:string;
  children:string
}

function CustomLink({ href,children, ...props }: CustomLinkProps) {
  const path=window.location.pathname;
  return (
    <li className={path===href? "active":""}>
    <a href={href}{...props}> {children}
    </a>
    </li>
  );
}