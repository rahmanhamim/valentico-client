import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const ProductDetails = () => {
 const { id } = useParams();
 const [product, setProduct] = useState({});

 const { user } = useAuth();

 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
  data.email = user.email;
  data.name = user.displayName;
  data.status = "Pending";
  console.log(data);

  fetch("http://localhost:5000/orders", {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.insertedId) {
     alert("Order successful");
    }
    reset();
   });
 };

 useEffect(() => {
  fetch(`http://localhost:5000/product/${id}`)
   .then((res) => res.json())
   .then((data) => setProduct(data));
 }, [id]);

 return (
  <>
   <Navigation></Navigation>
   <div className="container">
    <Row className="my-5 d-flex align-items-center">
     <Col sm={12} md={5}>
      <img className="img-fluid" src={product?.img} alt="" />
     </Col>
     <Col sm={12} md={5}>
      <h1>{product?.name}</h1>
      <h3>৳{product?.price}</h3>
      <p>{product?.description}</p>
      <h4 className="text-muted">
       Brand: <small>{product?.brand}</small>
      </h4>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
       <input
        className="my-0"
        {...register("address")}
        required
        placeholder="Delivery address"
       />{" "}
       <br />
       <input
        className="my-0"
        {...register("phone", { pattern: /^[0-9 -+]+$/ })}
        required
        placeholder="Phone Number"
       />{" "}
       <br />
       <input type="submit" value="Place Order" className="btn-regular my-0" />
      </form>
     </Col>
    </Row>
   </div>
   <Footer></Footer>
  </>
 );
};

export default ProductDetails;
