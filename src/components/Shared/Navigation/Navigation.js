import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
 return (
  <Navbar className="navbar-container" expand="lg">
   <Container>
    <Link to="/" className="d-flex align-items-center text-decoration-none">
     <img style={{ width: "50px" }} src={logo} alt="" />
     <h1 className="text-dark fw-bold">
      VALEN<span className="logo-span">TICO</span>
     </h1>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mx-auto d-inline-block">
      <Link to="/" className="nav-link-main d-inline-block">
       Home
      </Link>
      <Link to="/products" className="nav-link-main">
       Explore
      </Link>
     </Nav>

     <Link to="/">
      <i className="far fa-user login-icon"></i>
     </Link>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Navigation;
