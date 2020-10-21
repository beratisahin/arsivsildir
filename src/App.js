import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import TopMenu from "./components/header/TopMenu";
import BottomMenu from "./components/footer/BottomMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Hakkimizda from "./components/kurumsal/hakkimizda/Hakkimizda";
import Referanslarimiz from "./components/kurumsal/referanslarimiz/Referanslarimiz";
import Iletisim from "./components/iletisim/ContactForm";
import Lokasyon from "./components/kurumsal/lokasyonumuz/Lokasyonumuz";




function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 m-0 p-0">
          <div className="col-12 m-0 p-0">
            <TopMenu />
          </div>
          <div className="col-12 m-0 p-0">
            <Navbar />
          </div>
          <div className="interior" style={{backgroundColor:"#D3D3D3"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />
            <Route path="/referanslarimiz" component={Referanslarimiz} />
            <Route path="/lokasyonumuz" component={Lokasyon} />

            <Route path="/iletisim" component={Iletisim} />
          </Switch>

          </div>

          <div className="col-12">
            <Foooter />
          </div>
          
          <div className="col-12">
            <BottomMenu />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
