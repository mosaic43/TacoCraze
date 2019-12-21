import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import witchb from './witch.png';
import witch from './witch.css';
import MatchGame from './Matching/MatchGame';



function EvilWitch() {
    return (
      <div className="beWitched">
        <h1>Oh No! An evil witch stole your tacos!</h1>
        <img src={witchb} className="witch" />
        <br />

        <Link to="/MatchGame"> Get your tacos back! </Link>
      </div>
    );
  }


export default EvilWitch;