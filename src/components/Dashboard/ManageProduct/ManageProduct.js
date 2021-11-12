import React from "react";
import { useForm } from "react-hook-form";

const ManageProduct = () => {
 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
  console.log(data);
  fetch("http://localhost:5000/products", {
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
 return (
  <div className="my-5">
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
  </div>
 );
};

export default ManageProduct;
