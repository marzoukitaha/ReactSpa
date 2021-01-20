import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
    } from "react-router-dom";
    import Home from "./Home";
    import Stuff from "./Stuff";
    import Contact from "./Contact";
    import Inscription from "./Inscription";
    import MapC from "./MapC";    
    import GoogleImage from "./GoogleImage";



    class Main extends Component {
        render() {
        return (
        <HashRouter>
        <div>
        <h1>Simple SPA</h1>
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
<li><NavLink to="/stuff">Stuff</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
<li><NavLink to="/inscription">Inscription</NavLink></li>
<li><NavLink to="/map">Map</NavLink></li><li>
    <NavLink to="/googleimage">GoogleImage</NavLink></li>



        </ul>
        <div className="content">
<Route exact path="/" component={Home}/>
<Route path="/stuff" component={Stuff}/>
<Route path="/contact" component={Contact}/>
<Route path="/inscription" component={Inscription}/>
<Route path="/map" component={MapC}/>
<Route path="/googleimage" component={GoogleImage}/>



</div>
</div>
</HashRouter>
);
}
}
export default Main;