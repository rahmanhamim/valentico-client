import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => {
  fetch("http://localhost:5000/users/admin", {
   method: "PUT",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.modifiedCount > 0) {
     alert("New admin added");
    } else {
     alert("something went worng try again");
    }
   });
 };

 return (
  <div className="my-5">
   <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
    <input
     type="email"
     className="mb-0"
     {...register("email")}
     required
     placeholder="Enter Email"
    />
    <br />
    <input className="btn-regular mt-0" type="submit" value="Make Admin" />
   </form>
  </div>
 );
};

export default MakeAdmin;
