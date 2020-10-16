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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <a href="/" title="Adli Sicil Sildir">
              <img
                src={logo}
                alt="logo"
                style={{ width: "75%", height: "150px",marginLeft:"40px" }}
              ></img>
            </a>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "black", fontSize: "18px" }}>Adli Sicil Kaydı Nedir?</b>
            <p
              className="mt-4"
              style={{
                fontSize: "13px",
                color: "black",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Adli sicil kaydı; Vatandaşın devlet nezdinde tutulan suç kaydına adli sicil kaydı adı verilmektedir. 
              Sabıka kaydı olarak da bilinen adli sicil belgesinde bireyin 18 yaştan sonraki süreçlerde işlemiş olduğu suç ve fiiler yer almaktadır.
              Başta iş başvuruları olmak üzere, her türlü resmi kuruluşa kayıt yapılırken istenmesi muhtemel evrakların başında gelmektedir.
            </p>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "black", fontSize: "18px" }}>Kurumsal</b>
            <ul className="bottomlist">
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/referanslarimiz">Referanslarımız</Link>
              </li>
              
              <li onClick={() => this.scrollToTop()} style={{ color: "black" }}>
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "15px" }}
          >
            <p style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>
              Sosyal Medya
            </p>
            <a
              href="https://www.facebook.com/turkiyehukuk/"
              style={{ float: "left" }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/hukukalemi/"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/+905376971155"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon />
            </a>
            <a
              href="tel: +905376971155"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon />
            </a>

            <br />
            <p style={{ color: "blue", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <EmailIcon />
              </a>
              adlisicilsildir@gmail.com
            </p>
            <p style={{ color: "blue", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <SettingsPhoneIcon />
              </a>{" "}
              0537 697 11 55
            </p>
            <p style={{ color: "blue", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <HomeIcon />
              </a>
              Atatürk Caddesi No:1919 Çankaya/ANKARA{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
