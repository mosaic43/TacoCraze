import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Hooray from './Hooray.js';
import GameOverStyle from './GameOverStyle.css';


function GameOver() {
    return (
      <div className="GameOverMain">
        <header className="App-header">
        <h1>Hooray! You finally got your tacos!</h1>
        <Hooray></Hooray>
        </header>
      </div>
    );
  }


export default GameOver;