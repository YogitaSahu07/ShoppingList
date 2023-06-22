import React from 'react';
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
        
          <Link className="navbar-brand" to="/">
            My Shoping Mall 
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="btn btn-outline-dark"><Link to="./login">Login</Link></button>
            <button className="btn btn-outline-dark"><Link to="./register">Register</Link></button>
            <button className="btn btn-outline-dark"><Link to="./cart">Cart (0)</Link></button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;