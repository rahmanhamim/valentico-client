import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
 const { user, logOut } = useAuth();

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
      <Link to="/allproducts" className="nav-link-main">
       Explore
      </Link>
     </Nav>

     {user?.email ? (
      <Link to="/">
       <button className="btn-regular px-2" onClick={logOut}>
        Logout <i className="fas fa-sign-out-alt"></i>
       </button>
      </Link>
     ) : (
      <Link to="/login">
       <i className="far fa-user login-icon"></i>
      </Link>
     )}
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Navigation;
