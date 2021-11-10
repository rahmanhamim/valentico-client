import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = () => {
 return (
  <section
   style={{ marginTop: "8rem" }}
   className="featured-section container d-flex justify-content-center align-items-center"
  >
   <div className="text-center">
    <h1>Collection Arrived</h1>
    <p>
     You have no items &amp; Are you ready to use? come &amp; shop with us!
    </p>
    <p>
     Price from: <span className="fs-2">500</span>
    </p>
    <button className="btn-regular">Shop Now</button>
   </div>
  </section>
 );
};

export default FeaturedSection;
