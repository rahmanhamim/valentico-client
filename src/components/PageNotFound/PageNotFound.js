import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import notFoundImg from "../../images/pagenotfound.gif";
import Footer from "../Shared/Footer/Footer";

const PageNotFound = () => {
 return (
  <>
   <Navigation></Navigation>
   <div
    style={{ minHeight: "40vh" }}
    className="container d-flex justify-content-center"
   >
    <div>
     <img src={notFoundImg} className="img-fluid" alt="" />
     <h2 className="text-center">
      Sorry Page Not Found! <br /> Please Go Back Home.
     </h2>
    </div>
   </div>
   <Footer></Footer>
  </>
 );
};

export default PageNotFound;
