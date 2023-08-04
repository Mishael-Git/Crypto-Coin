import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

import { BiBitcoin } from "react-icons/bi";
import { Link } from "react-router-dom";
function Top() {
  return (
    <Navbar expand="lg" fixed="top" bg="primary" >
      <Container className="flex items-center px-4">
        <Navbar.Brand
          as={Link}
          to="/"
          className=" rounded-full bg-yellow-500 w-8"
        >
          <BiBitcoin
            size={30}
            className="text-white  font-extrabold cursor-pointer"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/features">
              {" "}
              <p class="text-white px-4  text-lg hover:bg-blue-700 rounded-lg">Features </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/market">
              {" "}
              <p class="text-white px-4  text-lg hover:bg-blue-700 rounded-lg">Market </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              {" "}
              <p class="text-white px-4  text-lg hover:bg-blue-700 rounded-lg">Blog </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/sign in">
              {" "}
              <p class="text-white px-4  text-lg hover:bg-blue-700 rounded-lg">Log In </p>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="border rounded-md ">
            <Link to="sign up">  <button class="text-white text-lg px-4 hover:opacity-30 ">Get started</button></Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
