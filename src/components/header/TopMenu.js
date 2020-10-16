import React, { Component } from "react";
import logo from "./ass.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import "./TopMenu.css"

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="p-0 m-0"
        style={{ width: "100%",backgroundColor:"white" }}
      >
        <div className="row p-0 m-0 pl-5">

          <div className="col-4">
            <a href="/" title="Adli Sicil Sildir">
            <img
              
              style={{ height: "auto", width: "100px" }}
              src={logo}
              alt="logo"
              
            ></img>
            </a>
            
          </div>


          
          <div className="col-8 mt-5" style={{display:'flex', justifyContent:'flex-end',float:"right"}}>
            <a
              href="https://www.facebook.com/turkiyehukuk/"
              style={{ float: "left"}}
            >
              <FacebookIcon className="icon" style={{ fontSize: 30,color:"darkblue" }} />
            </a>
            <a
              href="https://www.instagram.com/hukukalemi/"
              style={{ float: "left", textIndent: "10px",fontSize:"16px" }}
            >
              <InstagramIcon className="icon" style={{ fontSize: 30,color:"darkblue" }} />
            </a>
            <a
              href="https://wa.me/+905376971155"
              style={{ float: "left", textIndent: "10px",fontSize:"16px" }}
            >
              <WhatsAppIcon className="icon" style={{ fontSize: 30,color:"darkblue" }}/>
            </a>
            <a
              href="tel: +905376971155"
              style={{ float: "left", textIndent: "10px",fontSize:"16px" }}
            >
              <SettingsPhoneIcon className="icon" style={{ fontSize: 30,color:"darkblue" }}/>
            </a>
          </div>

        </div>
      </div>
    );
  }
}
