import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
 return (
  <Col xs={12} md={4}>
   <Card className="h-100">
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
     <Card.Title>{product.name}</Card.Title>
     <Card.Text>
      This is a longer card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
     </Card.Text>
    </Card.Body>
   </Card>
  </Col>
 );
};

export default Product;
