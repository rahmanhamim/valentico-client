import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Explore from "./components/Explore/Explore/Explore";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <PrivateRoute path="/allproducts">
      <Explore></Explore>
     </PrivateRoute>
     <PrivateRoute path="/product/:id">
      <ProductDetails></ProductDetails>
     </PrivateRoute>
     <PrivateRoute path="/dashboard">
      <Dashboard></Dashboard>
     </PrivateRoute>
     <Route path="/login">
      <Login></Login>
     </Route>
     <Route path="/register">
      <Register></Register>
     </Route>
    </Switch>
   </Router>
  </AuthProvider>
 );
}

export default App;
