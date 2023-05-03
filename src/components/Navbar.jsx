import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Navbar,Nav} from 'react-bootstrap';

import { BiBitcoin } from "react-icons/bi";
function Top() {
  return (
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="#home" className="rounded-full bg-[#ffd700] w-8">
        <BiBitcoin
          size={30}
          className="text-white font-extrabold cursor-pointer"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
       <Nav.Link href="#features" > <p class="text-white px-6 hover:text-slate-500">Features </p></Nav.Link>
       <Nav.Link href="#market" > <p class="text-white px-6 hover:text-slate-500">Market </p></Nav.Link>
       <Nav.Link href="#blog" > <p class="text-white px-6 hover:text-slate-500">Blog </p></Nav.Link>
       <Nav.Link href="#log in" > <p class="text-white px-6 hover:text-slate-500">Log In </p></Nav.Link>
        </Nav>
      <Nav className="ms-auto">
        <div className="border">
        <button class="text-white">Get started</button>
        </div>
      </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
