import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import logo from "./ass.jpg";
import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div>
        <div class="row p-4" style={{ backgroundColor: "white" }}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{marginBottom:"1.5rem"}}>
            <a href="/" title="Adli Sicil Sildir">
              <img
                src={logo}
                alt="logo"
                style={{ width: "75%", height: "150px",marginLeft:"40px" }}
              ></img>
            </a>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{marginBottom:"1.5rem"}}>
            <p style={{ color: "#499078", fontSize: "20px" ,textAlign:"center"}}>Adli Sicil Kaydı Nedir?</p>
            <p
              className="mt-4"
              style={{
                fontSize: "15px",
                color: "black",
                textAlign: "justify",
              
               

              }}
            >
              {" "}
              Adli sicil kaydı; Vatandaşın devlet nezdinde tutulan suç kaydına adli sicil kaydı adı verilmektedir. 
              Sabıka kaydı olarak da bilinen adli sicil belgesinde bireyin 18 yaştan sonraki süreçlerde işlemiş olduğu suç ve fiiler yer almaktadır.
              Başta iş başvuruları olmak üzere, her türlü resmi kuruluşa kayıt yapılırken istenmesi muhtemel evrakların başında gelmektedir.
            </p>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 " style={{marginBottom:"1.5rem"}}>
              <p style={{ color: "#499078", fontSize: "20px",textAlign:"center"}}> Faydalı Bağlantılar </p>
            <ul className="faydalı">
                      <li>
                      <a className="baglantı" href="https://www.adalet.gov.tr/" target="_blank">Türkiye Cumhuriyeti Adalet Bakanlığı</a>
                      </li>
                      <br/>
                      <li>
                      <a className="baglantı" href="https://adlisicil.adalet.gov.tr/" target="_blank">Adli Sicil ve İstatistik Genel Müdürlüğü</a>
                      </li>
            </ul>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12" style={{marginBottom:"1.5rem"}}
          >
            <p style={{ color: "#499078",  fontSize: "20px",textAlign:"center"}}>İletişim</p>
            <a className="icon"
              href="https://www.facebook.com/adli.sicil.1"
              target="_blank"
              style={{ float: "left" }}
            >
              <FacebookIcon style={{fontSize:"24px"}}/>
            </a>
            
            <a className="icon"
              href="https://wa.me/+905427724718"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon style={{fontSize:"24px",color:"#66CC00"}}/>
            </a>
            <a className="icon"
              href="tel: +905427724718"
              target="_blank"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon style={{fontSize:"24px",color:"#66CC00"}}/>
            </a>
            
           
            <br/>
            <br/>
            <p style={{ color:"#4682B4", fontSize: "16px", textAlign: "left"}}>
              {" "}
              <a >
                <EmailIcon style={{fontSize:"20px"}}/>
                &nbsp;
              </a>
               adlisicilsildir@gmail.com
            </p>
            <p style={{ color:"#4682B4", fontSize: "16px", textAlign: "left"}}>
              {" "}
              <a>
                <SettingsPhoneIcon style={{fontSize:"20px"}} />
                &nbsp;
              </a>{" "}
              0542 772 4718
            </p>
            <p style={{ color:"#4682B4", fontSize: "16px", textAlign: "left" }}>
              {" "}
              <a>
                <HomeIcon style={{fontSize:"20px"}}/>
                &nbsp;
              </a>
              Meşrutiyet Mahallesi Karanfil Sokak 38/18 Kızılay, Çankaya/ANKARA{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
