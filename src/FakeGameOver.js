import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import witch from './witch.css';
import EvilWitch from './witch.js';
import FakeTruck from "./fakeTruck";


function FakeGameOver() {
    return (
      <div className="GameOverMain">
        <header className="App-header">
       
        <br />
      
        <FakeTruck></FakeTruck>
        </header>
      </div>
    );
  }


export default FakeGameOver;