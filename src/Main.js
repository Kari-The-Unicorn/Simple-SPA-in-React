import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Discogs from "./Discogs";
import Videos from "./Videos";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div class = "main">
            <h1>THE CURE</h1>
            <ul className="header">
            <li><NavLink exact to="/">About</NavLink></li>
            <li><NavLink to="/discogs">Discogs</NavLink></li>
            <li><NavLink to="/videos">Videos</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/discogs" component={Discogs}/>
            <Route path="/videos" component={Videos}/>
          </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;