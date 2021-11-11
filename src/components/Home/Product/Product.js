import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
 return (
  <Col className="mb-5" xs={12} md={4}>
   <Card className="h-100 product-card">
    <Card.Img variant="top" src={product.img} />
    <Card.Body style={{ backgroundColor: "#F5F5F5" }}>
     <Card.Title className="text-center">{product.name}</Card.Title>
     <Card.Text className="text-center">
      <strong style={{ color: "#FE7250" }}>৳{product.price}</strong>
      <Link to={`product/${product._id}`}>
       <button className="btn-regular ms-3 card-btn">Buy Now</button>
      </Link>
     </Card.Text>
    </Card.Body>
   </Card>
  </Col>
 );
};

export default Product;
