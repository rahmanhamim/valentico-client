import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Home/Product/Product";

const AllProducts = () => {
 const [products, setProducts] = useState([]);
 useEffect(() => {
  fetch("http://localhost:5000/products")
   .then((res) => res.json())
   .then((data) => setProducts(data));
 }, []);

 return (
  <section className="all-products container">
   <div className="my-5">
    <h1 className="section-title">Explore Your Desire Product</h1>
   </div>
   <Row>
    {products.map((product) => (
     <Product key={product.name} product={product}></Product>
    ))}
   </Row>
  </section>
 );
};

export default AllProducts;
