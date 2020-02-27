import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

const navbar = () => {
  return (
    <Container className='p-0' fluid={true}>
      <Navbar className=' navbar' bg='transparent' expand='lg'>
        <Navbar.Brand>
          <a href='https://github.com/ErvinBocan/internship'>Ervin Boćan</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-toggle' className='toggle'/>
        <Navbar.Collapse id='navbar-toggle'>
          <Nav className='ml-auto'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/about'>
              About
            </Link>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default navbar;
