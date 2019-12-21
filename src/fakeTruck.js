import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import truckb from './tacotruck.png';
import fakeTruck from './fakeTruck.css';



function FakeTruck() {
    return (
      <div className="beWitched">
        <h1>Yasss..Tacos!</h1>
        <img src={truckb} className="truck" />
      </div>
    );
  }


export default FakeTruck;