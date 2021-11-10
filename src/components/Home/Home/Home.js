import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
 return (
  <>
   <Navigation></Navigation>
   <Banner></Banner>
   <Products></Products>
   <FeaturedSection></FeaturedSection>
   <Reviews></Reviews>
   <Footer></Footer>
  </>
 );
};

export default Home;
