
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
import { Link } from 'react-router-dom';
import { useMatch, useResolvedPath } from 'react-router-dom';
export default function Navbar() {
  return <nav className='nav'>
    <Link to='/' className='site-title'> TShirts</Link>
    <ul>
      <CustomLink to='/'> Home </CustomLink>
      <CustomLink to='/about'> About </CustomLink>
      <CustomLink to='/women'> Women </CustomLink>
      <CustomLink to='/men'> Men </CustomLink>
      <CustomLink to='/kids'> Kids </CustomLink>
    </ul>
  </nav>
}
interface CustomLinkProps {
  to: string;
  children: string
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath=useResolvedPath(to)
  const isActive=useMatch({path:resolvedPath.pathname, end:true})

  return (
    <li className={isActive? "active" : ""}>
      <Link to={to}{...props}> 
      {children}
      </Link>
    </li>
  );
}