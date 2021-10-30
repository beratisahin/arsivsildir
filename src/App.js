import React from "react";
import "./App.css";
import Foooter from "./components/footer/Foooter";
import TopMenu from "./components/header/TopMenu";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from '@material-ui/icons/Phone';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";








function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor:"#FFFFF3"}}>
        <div className="col-12 m-0 p-0">
          <div className="col-12 m-0 p-0">
            <TopMenu />
          </div>

          
          
          <div className="interior" style={{backgroundColor:"#FFFFF3"}}>
          <Switch>
            <Route exact path="/" component={Home} />
         
            
          
          </Switch>

          </div>

          <div className="col-12">
            <Foooter />
          </div>
          
          

          <div className="roof-phone">
                <a
                    href="tel: +905427724718"
                    className="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneIcon className="phone-icon"/>
                </a>
            </div>
            <div className="roof-whatsapp">
                <a
                    href="https://wa.me/+905427724718"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="whatsapp-icon"/>   
                </a>
            </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
