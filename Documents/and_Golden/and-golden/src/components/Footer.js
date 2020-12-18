import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="Help">
        <h3>Help & Information</h3>
        <ul>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <Link to="/contact-us">Delivery</Link>
          </li>
          <li>
            <Link to="/contact-us">Returns Process</Link>
          </li>
          <li>
          <Link to="/contact-us">Order Issues</Link>
          </li>
          <li>
          <Link to="/contact-us">Size Guide</Link>
          </li>
          <li>
          <Link to="/contact-us">Store Locator</Link>
          </li>
        </ul>
      </div>

      <div className="About">
      <h3>About</h3>
      <ul>
        <li>
          <Link to="/about">About Golden Shoes</Link>
        </li>
        <li>
          <Link to="/about">Join Us</Link>
        </li>
        <li>
        <Link to="/about">Terms & Conditions</Link>
      </li>
      </ul>
    </div>

      <h4>Golden Shoes © All Rights Reserved 2020</h4>
    </div>
  )
}

export default Footer;