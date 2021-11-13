import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageProduct = () => {
 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
  console.log(data);
  fetch("https://radiant-plains-03771.herokuapp.com/products", {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.insertedId) {
     alert("Product added");
    }
    reset();
   });
 };

 const [products, setProducts] = useState([]);
 useEffect(() => {
  fetch("https://radiant-plains-03771.herokuapp.com/products")
   .then((res) => res.json())
   .then((data) => setProducts(data));
 }, []);

 //  Handle Delete Product
 const handleDeleteProduct = (id) => {
  const query = window.confirm("are you sure?");
  if (!query) {
   return;
  } else {
   const url = `https://radiant-plains-03771.herokuapp.com/products/${id}`;
   fetch(url, {
    method: "DELETE",
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.deletedCount) {
      alert("deleted");
     }
     const remaining = products.filter((items) => items._id !== id);
     setProducts(remaining);
    });
  }
 };

 return (
  <div className="my-5">
   <Row>
    <Col sm={12} md={4}>
     <h2>Add new product</h2>
     <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <input
       className="my-0"
       {...register("name")}
       required
       placeholder="Product Name"
      />
      <br />
      <input
       className="my-0"
       {...register("price")}
       required
       placeholder="Product Price"
      />
      <br />
      <input
       className="my-0"
       {...register("brand")}
       required
       placeholder="Product Brand"
      />
      <br />
      <input
       type="url"
       className="my-0"
       {...register("img")}
       required
       placeholder="Image URL"
      />
      <br />
      <input
       className="my-0"
       {...register("rating", { pattern: /^[0-5 -+]+$/ })}
       required
       placeholder="Rating 0-5"
      />
      <br />
      <textarea
       cols="43"
       rows="8"
       className="my-0"
       {...register("description")}
       required
       placeholder="Product Description"
      />
      <br />
      <input type="submit" value="Add Product" className="btn-regular my-0" />
     </form>
    </Col>
    {/* delete product section */}
    <Col sm={12} md={6}>
     <Row xs={1} md={3} className="g-4">
      {products.map((product) => (
       <Col>
        <Card className="h-100">
         <Card.Img variant="top" src={product?.img} />
         <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Button
           onClick={() => handleDeleteProduct(product._id)}
           variant="outline-danger"
          >
           Delete Product
          </Button>
         </Card.Body>
        </Card>
       </Col>
      ))}
     </Row>
    </Col>
   </Row>
  </div>
 );
};

export default ManageProduct;
