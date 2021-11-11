import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
 const { user, registerUser, isLoading, authError } = useAuth();

 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => registerUser(data.email, data.password, data.name);

 return (
  <>
   <Navigation></Navigation>
   <div className="container my-5">
    <h1 className="section-title">Register New Account</h1>
    <div className="login-form-container">
     {!isLoading && (
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
       <input
        {...register("name", { required: true })}
        placeholder="Your Name"
       />
       <input
        {...register("email", { required: true })}
        placeholder="Your Email"
       />
       <input
        type="password"
        {...register("password", { required: true, maxLength: 20 })}
        placeholder="Password"
       />
       <input className="btn-regular" type="submit" value="Login" />
      </form>
     )}
     {isLoading && <Spinner animation="grow" variant="warning" />}
    </div>

    {user?.email && (
     <Alert style={{ width: "18rem" }} className="mx-auto" variant="success">
      Successfully Registered!!!
     </Alert>
    )}
    {authError && (
     <Alert style={{ width: "18rem" }} className="mx-auto" variant="danger">
      {authError}
     </Alert>
    )}
    <div>
     <p className="text-center">
      Already have an account? <Link to="/login">Login Here!</Link>
     </p>
    </div>
   </div>
   <Footer></Footer>
  </>
 );
};

export default Register;
