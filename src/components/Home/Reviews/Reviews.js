import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import reviewer from "../../../images/reviewer-1.png";

const Reviews = () => {
 const [productReviews, setProductReviews] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/reviews")
   .then((res) => res.json())
   .then((data) => setProductReviews(data));
 }, []);

 return (
  <section style={{ marginTop: "8rem" }} className="container">
   <div>
    <h2 className="section-title mb-5">WHAT OUR CLIENTS SAY!</h2>
   </div>
   <Row xs={1} md={4} className="g-4">
    {productReviews.map((review) => (
     <Col key={review._id}>
      <Card className="h-100 p-3">
       <div className="d-flex align-items-center">
        <Card.Img style={{ width: "40px" }} variant="top" src={reviewer} />
        <Card.Title className="ms-2">{review?.reviewer}</Card.Title>
       </div>
       <Card.Body className="px-1">
        <Card.Text>{review?.reviewText}</Card.Text>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </section>
 );
};

export default Reviews;
