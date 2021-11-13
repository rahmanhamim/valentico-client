import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
 return (
  <Container className="my-4">
   <Row className="d-flex justify-content-evenly">
    <Col
     xs={12}
     md={7}
     className="mb-4 banner-left d-flex align-items-center px-5"
    >
     <div>
      <p className="banner-subtitle">VALENTICO BEST COLLECTION</p>
      <h2 className="banner-title">
       A Range Of <br /> Perfume
      </h2>
      <p>
       Starts Price: <span className="banner-subtitle"> ৳550.00</span>
      </p>
      <Link to="/allproducts">
       <button className="btn-regular">Shop Now</button>
      </Link>
     </div>
    </Col>
    <Col xs={12} md={4}>
     <Row>
      <Col xs={12} className="banner-right-top d-flex align-items-center px-5">
       <div>
        <h3>
         Pick Your <br /> Items
        </h3>
        <p className="text-secondary">
         Smell fresher, <br /> our perfumes are the answer.
        </p>
        <Link to="/allproducts">
         <button className="btn-regular">Shop Now</button>
        </Link>
       </div>
      </Col>
      <Col
       xs={12}
       className="banner-right-bottom d-flex align-items-center px-5"
      >
       <div>
        <h3>
         Best Of <br /> Products
        </h3>
        <p className="text-secondary">
         fragrance <br /> thats you love
        </p>
        <p>
         New Price: <span className="banner-subtitle"> ৳850.00</span>
        </p>
       </div>
      </Col>
     </Row>
    </Col>
   </Row>
  </Container>
 );
};

export default Banner;
