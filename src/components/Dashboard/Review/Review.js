import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
 const { user } = useAuth();

 const { register, handleSubmit, reset } = useForm();

 const onSubmit = (data) => {
  data.reviewer = user.displayName;
  console.log(data);
  fetch("http://localhost:5000/reviews", {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.insertedId) {
     alert("Review successful");
    }
    reset();
   });
 };

 return (
  <div className="my-5">
   <h2>Add a review</h2>
   <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
    <textarea
     cols="43"
     rows="10"
     className="my-0"
     {...register("reviewText")}
     required
     placeholder="Write Review"
    />
    <br />
    <input
     type="number"
     className="my-0"
     {...register("rating")}
     min="0"
     max="5"
     required
     placeholder="Rating 0-5"
    />
    <br />

    <input type="submit" value="Confirm Review" className="btn-regular my-0" />
   </form>
  </div>
 );
};

export default Review;
