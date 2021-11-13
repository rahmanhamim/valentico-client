import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FeaturedSection.css";

const FeaturedSection = () => {
 return (
  <section style={{ marginTop: "8rem" }} className=" container">
   <div className="featured-section text-center">
    <h1>Collection Arrived</h1>
    <p>
     You have no items &amp; Are you ready to use? come &amp; shop with us!
    </p>
    <p>
     Price from: <span className="fs-2">500</span>
    </p>
    <Link to="/allproducts">
     <button className="btn-regular">Shop Now</button>
    </Link>
   </div>

   <div className="my-3 feature-bottom-section d-flex justify-content-between align-items-center">
    <div className="feature-left-1 p-4 d-flex align-items-center">
     <div>
      <h2>Best Collection</h2>
      <p>
       We have the <br /> Latest collection
      </p>
      <Link to="/allproducts">
       <button className="btn-regular">Shop Now</button>
      </Link>
     </div>
    </div>
    <div className="feature-right-2 p-4 d-flex align-items-center">
     <div>
      <h2>
       Maybe You’ve <br /> Earned It
      </h2>
      <p>
       Use code: Valentico Get <br /> 25% Off for all items!
      </p>
     </div>
    </div>
   </div>
  </section>
 );
};

export default FeaturedSection;
