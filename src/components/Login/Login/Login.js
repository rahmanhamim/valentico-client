import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Alert, Spinner } from "react-bootstrap";

const Login = () => {
 const { user, loginUser, isLoading, authError } = useAuth();

 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
  loginUser(data.email, data.password);
  reset();
 };

 return (
  <>
   <Navigation></Navigation>
   <div className="container my-5">
    <h1 className="section-title">Please Login</h1>
    <div className="login-form-container">
     {!isLoading && (
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
       <input
        {...register("email", { required: true, maxLength: 20 })}
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
      Login Success!
     </Alert>
    )}
    {authError && (
     <Alert style={{ width: "18rem" }} className="mx-auto" variant="danger">
      {authError}
     </Alert>
    )}
    <div>
     <p className="text-center">
      Don't have an account? <Link to="/register">Register Now!</Link>
     </p>
    </div>
   </div>
   <Footer></Footer>
  </>
 );
};

export default Login;
