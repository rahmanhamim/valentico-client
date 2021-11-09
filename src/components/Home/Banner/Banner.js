import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
       New Price: <span className="banner-subtitle"> $250.00</span>
      </p>
      <button className="btn-regular">Shop Now</button>
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
         Adipiscing elit <br /> curabitur senectus sem
        </p>
        <button className="btn-regular">Shop Now</button>
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
         Cras pulvinar <br /> loresum dolor conse
        </p>
        <p>
         New Price: <span className="banner-subtitle"> $250.00</span>
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
