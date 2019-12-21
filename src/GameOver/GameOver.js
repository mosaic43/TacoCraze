import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Hooray from './Hooray.js';
import GameOverStyle from './GameOverStyle.css';
import {ResetScore} from '../actions/index';
import { connect } from 'react-redux';
import TacoCounter from '../tacoCounter/counter.js';

const select = state => ({
    Results: state.results
})

class GameOver extends React.Component {
ResetGame () {
   this.props.dispatch(ResetScore)
}

// function GameOver() {
    render() {
    return (
      <div className="GameOverMain">
        <header className="App-header">
        <h1>Hooray! You finally got your tacos!</h1>
        <Hooray></Hooray>
       
      

        Score: {select}
        <button onClick={this.ResetGame()}> <Link to="/Intro"> <img src="ticket2.png" className="ticket" /></Link></button>
        </header>
      </div>
    );
    }
//   }
}

export default connect(select) (GameOver);