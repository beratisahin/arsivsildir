import React from "react";
import "./App.css";
import Foooter from "./components/footer/Foooter";
import TopMenu from "./components/header/TopMenu";
import BottomMenu from "./components/footer/BottomMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";








function App() {
  return (
    <Router>
      <div className="App">
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
          
          <div className="col-12">
            <BottomMenu />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
