import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./ass.jpg";
import Ass from "./adlisicilsildir.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./TopMenu.css"

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{ width: "100%",backgroundColor:"#FFFFF3" }}
      >
        <div className="col-12" style={{display:"inline"}}>

            <div className="col-2" style={{float:"left"}}>
              <a href="/" title="Adli Sicil Sildir">
              <img
                className="top_image"
                style={{ height: "12rem", width: "16rem",padding:"1rem" }}
                src={Ass}
                alt="Adli Sicil Sildir"
                title="Adli Sicil Sildir"
                
              ></img>
              </a>
              
            </div>

            


          
            <div className="col-2 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem",marginRight:"-1rem"}}>
                 &nbsp;
                  <a
                    href="https://wa.me/+905427724718"
                    target="_blank"
                    style={{ float: "left" }}
                  >
                    <LocationOnIcon className="icon_top" />
                    
                  </a>
                  <p className="top_icon_info">&nbsp;Çankaya/Ankara</p>

                  <a
                    href="tel: +905427724718"
                    target="_blank"
                    style={{ float: "left"}}
                  >
                    <AccessTimeIcon className="icon_top"  />
                  </a>
                  <p className="top_icon_info">&nbsp;7/24</p>
            </div>

        </div>
      </div>
    );
  }
}
