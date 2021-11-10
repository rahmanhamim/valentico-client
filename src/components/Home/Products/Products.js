import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
 const [products, setProducts] = useState([]);
 useEffect(() => {
  fetch("/products.json")
   .then((res) => res.json())
   .then((data) => setProducts(data));
 }, []);

 return (
  <section className="my-5 container-fluid">
   <h2 className="section-title">DEALS FOR YOU</h2>
   <Row className="my-5 d-flex justify-content-center">
    <Col sm={12} md={3}>
     <div className="products-side-img-women d-flex align-items-center px-4">
      <div>
       <h2 className="text-light">
        FLOWERS FROM <br /> NATURE
       </h2>
       <button className="btn-regular">Shop Now</button>
      </div>
     </div>
    </Col>
    <Col sm={12} md={7}>
     <Row className="g-4">
      {products.slice(0, 3).map((product) => (
       <Product key={product.name} product={product}></Product>
      ))}
     </Row>
    </Col>
   </Row>
   <Row className="my-5 d-flex justify-content-center">
    <Col sm={12} md={7}>
     <Row className="g-4">
      {products.slice(3, 6).map((product) => (
       <Product key={product.name} product={product}></Product>
      ))}
     </Row>
    </Col>
    <Col sm={12} md={3}>
     <div className="products-side-img-men d-flex align-items-center px-4">
      <div>
       <h2 className="text-light">
        We Bring You <br /> The Best
       </h2>
       <button className="btn-regular">Shop Now</button>
      </div>
     </div>
    </Col>
   </Row>
  </section>
 );
};

export default Products;
