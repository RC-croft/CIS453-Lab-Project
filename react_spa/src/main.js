import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Graphics from "./Graphics";
import Controls from "./Controls";
import Audio from "./Audio";
import optionG from "./img/options-grphcs.png";
import optionC from "./img/options-ctrls.png";
import optionA from "./img/options-audio.png";
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          
          <ul className="header">
            <li><NavLink exact to="/"><img src={optionG} alt=""/></NavLink></li>
            <li><NavLink to="/Controls"><img src={optionC} alt=""/></NavLink></li>
            <li><NavLink to="/Audio"><img src={optionA} alt=""/></NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Graphics}/>
            <Route path="/Controls" component={Controls}/>
            <Route path="/Audio" component={Audio}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}

export default Main;