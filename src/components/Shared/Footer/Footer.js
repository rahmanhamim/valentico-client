import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
 return (
  <footer className="footer-section">
   <div className="container py-5">
    <Row className="d-flex justify-content-center">
     <Col sm={12} md={3} className="text-center">
      <p>
       <strong> Quick Menu</strong>
      </p>
      <p>New Arrivals</p>
      <p>Life Style</p>
      <p>Accents</p>
      <p>FAQ</p>
      <p>Query</p>
     </Col>
     <Col sm={12} md={5} className="text-center">
      <p>
       <strong> NEWSLETTER</strong>
      </p>
      <p>sign up for our free perfume care tips and inspiration</p>
      <input type="text" placeholder="Your Email" className="footer-input" />
      <br />
      <button className="footer-btn my-2">SUBSCIRBE</button>
      <div>
       <i className="fab fa-2x fa-facebook-f mx-4 my-3 text-muted"></i>
       <i className="fab fa-2x fa-instagram mx-4 my-3 text-muted"></i>
       <i className="fab fa-2x fa-twitter mx-4 my-3 text-muted"></i>
      </div>
     </Col>
     <Col className="text-center" sm={12} md={3}>
      <p>
       <strong>INFORMATION</strong>
      </p>
      <p>Track Order</p>
      <p>Delivery</p>
      <p>Contact Us</p>
      <p>Return Policy</p>
      <p>Terms &amp; Condition</p>
     </Col>
    </Row>
    <p className="text-center">
     Developed by |{" "}
     <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/rahmanhamim/"
     >
      Rahman Hamim
     </a>
    </p>
   </div>
  </footer>
 );
};

export default Footer;
