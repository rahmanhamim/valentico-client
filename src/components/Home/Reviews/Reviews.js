import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Reviews = () => {
 const [productReviews, setProductReviews] = useState([]);
 console.log(productReviews);

 useEffect(() => {
  fetch("https://radiant-plains-03771.herokuapp.com/reviews")
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
        <i className="fas fa-2x fa-user-circle text-muted"></i>
        <Card.Title className="ms-2 my-0">{review?.reviewer}</Card.Title>
       </div>
       <Card.Body className="px-1">
        <Card.Text>{review?.reviewText}</Card.Text>
        <p>
         {review.rating === "5" ? (
          <>
           <i className="fas fa-star  text-warning"></i>
           <i className="fas fa-star  text-warning"></i>
           <i className="fas fa-star  text-warning"></i>
           <i className="fas fa-star  text-warning"></i>
           <i className="fas fa-star  text-warning"></i>
          </>
         ) : review.rating === "4" ? (
          <>
           <i className="fas fa-star text-warning"></i>
           <i className="fas fa-star text-warning"></i>
           <i className="fas fa-star text-warning"></i>
           <i className="fas fa-star text-warning"></i>
          </>
         ) : review.rating === "3" ? (
          <>
           <i className="fas fa-star text-warning"></i>
           <i className="fas fa-star text-warning"></i>
           <i className="fas fa-star text-warning"></i>
          </>
         ) : review.rating === "2" ? (
          <>
           <i className="fas fa-star text-warning"></i>
           <i className="fas fa-star text-warning"></i>
          </>
         ) : (
          <i className="fas fa-star text-warning"></i>
         )}
        </p>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </section>
 );
};

export default Reviews;
