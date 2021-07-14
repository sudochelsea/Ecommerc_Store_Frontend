import React from 'react';
import "./Header.css";
import Button from '@material-ui/core/Button';
//import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Login from './LogIn';


const Header = () => {
return(
<Router>
<div>
<nav className="navbar ">
  <div className="container-fluid">
    {/* <a className="navbar-brand">youCommerce</a> */}
    
      <form className="d-flex">
        
        {/* <FontAwesomeIcon icon={['fas', 'bars']} size="2x"/> */}
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
     
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Accounts
        </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li>
                 <Link to="/login"> LogIn </Link>
                 {/* <a class="dropdown-item" href="#">Log In</a> */}
                </li>
               <li>
                 <Link to="/account"> Create Account</Link>
                 {/* <a class="dropdown-item" href="#">Create Account</a> */}
                 </li>
               <li>
                  <Link to="/">  </Link>
                  {/* <a class="dropdown-item" href="#"></a> */}                  
                </li>
            </ul>

        </div>
    </form> 
    <FontAwesomeIcon icon={['fas', 'shopping-cart']} size="2x"/> 
    </div>

</nav>
</div>
  <Switch>
     <Route path="/login" component={Login}></Route>
     {/* <Route path="/" component={}></Route> */}
  </Switch>
</Router>
)
}
export default Header