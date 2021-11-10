import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Explore from "./components/Explore/Explore/Explore";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route path="/allproducts">
      <Explore></Explore>
     </Route>
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
