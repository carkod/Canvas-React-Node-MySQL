import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import logo from './bcbilogo.svg'


class HeaderNavigation extends Component{

  render(){
    return(
      <Navbar fixedTop>
      <Navbar.Header>
      <LinkContainer to='/'>
        <Navbar.Brand>
        <a href="/">
        <img alt="" src={logo} />
        </a>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        <LinkContainer to='/search'>
          <NavItem eventKey={1} >Database Search </NavItem>
        </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default HeaderNavigation;
