import "./Navbar.css";
import brand from'./brand.jpg';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#28304d",
        }}
      >

        <div
          className="mt-3"
          style={{ position: "absolute", left: "0", zIndex:'55555', color: "white",}}
        >
          <Link className="nav-link" to="/" >
                 
            <p>ADLİ SİCİL SİLDİR</p>
            
          </Link>
        </div>
        
        
       
        <nav
          class="navbar navbar-expand-lg navbar-dark p-0 m-0"
          style={{ backgroundColor: "#28304d", borderRadius: "0px !important"}}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" style={{float:"right"}}>
              <li class="nav-item dropdown">
                <a
                  style={{ color: "#fff", fontSize: "22px" }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"

                >
                  KURUMSAL
                </a>
                &nbsp;
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/hakkimizda">
                    Hakkımızda
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/referanslarimiz">
                    Referanslarımız
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/lokasyonumuz">
                    Lokasyonumuz
                  </Link>
                  
                 
                </div>
              </li>

            
              
              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/iletisim" style={{ color: "#fff", fontSize: "22px" }}>
                  İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
