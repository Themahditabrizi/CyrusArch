import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav className="transparent-navbar">
    <Link to="/">
      <h1>Cyrus Arch</h1>
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Service">Service</Link>
      </li>
      <li>
        <Link to="/Works">Works</Link>
      </li>
      <li>
        <Link to="/Team">Team</Link>
      </li>
      <li>
        <Link to="/ContactUs">Contact Us</Link>
      </li>
    </ul>
  </Nav>
  )
}

export default Navbar