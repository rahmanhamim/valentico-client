import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import reviewer from "../../../images/reviewer-1.png";

const Reviews = () => {
 return (
  <section style={{ marginTop: "8rem" }} className="container">
   <div>
    <h2 className="section-title mb-5">WHAT OUR CLIENTS SAY!</h2>
   </div>
   <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
     <Col key={idx + 1}>
      <Card className="p-3">
       <div className="d-flex align-items-center">
        <Card.Img style={{ width: "40px" }} variant="top" src={reviewer} />
        <Card.Title className="ms-2">Card title</Card.Title>
       </div>
       <Card.Body>
        <Card.Text>
         This is a longer card with supporting text below as a natural lead-in
         to additional content. This content is a little bit longer.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </section>
 );
};

export default Reviews;
