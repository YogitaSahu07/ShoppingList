import React from "react";
// import "./style.css";
import Navbar from './Component/Navbar';
import Home  from './Component/Home'
import Products from './Component/Products'


import {Route, Switch} from "react-router-dom";


function App() {
  return (
   <>
   <Navbar/>
   <Switch>
  <Route exact path="/" component={Home}/>
 
  <Route exact path="/Product" component={Products}/>
  {/* <Route  exact path="/Product/:id" component={Product}/> */}
   </Switch>
   </>
  );
}
export default App