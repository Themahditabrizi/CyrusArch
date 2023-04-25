import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav className="transparent-navbar">
    <a href="#">
      <h1>Cyrus Arch</h1>
    </a>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#services">Service</a>
      </li>
      <li>
        <a href="#works">Works</a>
      </li>
      <li>
        <a href="">Team</a>
      </li>
      <li>
        <a href="">Contact Us</a>
      </li>
    </ul>
  </Nav>
  )
}

export default Navbar