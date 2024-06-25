import React, { useState } from 'react';
import "../css/header.css";
const Header=()=>{
  

  
    return(
        <nav class="navbar navbar-expand-lg  navbar-dark fixed-top header_class bg-transparent" style={{backgroundColor:"maroon"}} >
        <div class="container-fluid">
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list_items">
            <li className="nav-item">
              <a className="nav-link list_items" aria-current="page" href="/" style={{color:"white"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link list_items" aria-current="page" href="/partner_details">Love Letter</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/crush_details">Proposal Letter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apologize_details">Apologizing Letter</a>
            </li>
            
            
          </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;
