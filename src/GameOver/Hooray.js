import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import jump from './jump.png';
import tacorain from './taco.png';
function Hooray() {
    return (
      <div className="Hooray">
        <header className="Hooray-header">
        </header>
        <img src={tacorain} className="tacos" />
        <br />
        <br />
        <img src={tacorain} className="tacos2" />
        <br />
        <img src={tacorain} className="tacos3" />
        <img src={jump} className="jump" />
      </div>
    );
  }


export default Hooray