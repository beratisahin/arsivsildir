import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./ass.jpg";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import "./TopMenu.css"

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{ width: "100%",backgroundColor:"#ffffff" }}
      >
        <div className="col-12" style={{display:"inline"}}>

            <div className="col-2" style={{float:"left"}}>
              <a href="/" title="Adli Sicil Sildir">
              <img
                className="top_image"
                style={{ height: "10rem", width: "14rem",padding:"1rem" }}
                src={Logo}
                alt="logo"
                
              ></img>
              </a>
              
            </div>

            <div
              className="col-8 firma_div"
              style={{ color: "white",float:"left",marginTop:"3rem"}}
              >
              <Link className="firma_ismi" to="/" style={{ color: "#4682B4",fontWeight:"bold", fontSize:"xx-large",textAlign:"center",align:"center",margin:"auto",display:"block"}}>
                <b>ADLİ SİCİL SİLDİR</b>
              </Link>
            </div>


          
            <div className="col-2 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem",marginRight:"-1rem"}}>
                 &nbsp;
                  <a
                    href="https://wa.me/+905427724718"
                    target="_blank"
                    style={{ float: "left" }}
                  >
                    <WhatsAppIcon className="icon_top" style={{color:"#4682B4"}} />
                  </a>

                  <a
                    href="tel: +905427724718"
                    target="_blank"
                    style={{ float: "left"}}
                  >
                    <SettingsPhoneIcon className="icon_top" style={{color:"#4682B4"}} />
                  </a>
            </div>

        </div>
      </div>
    );
  }
}
