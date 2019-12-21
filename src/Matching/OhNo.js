import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Hooray from './Hooray.js';
import GameOverStyle from './GameOverStyle.css';


import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MainQuizStyle from './MainQuizStyle.css';
import { quizData } from './quizData.js';
import GameOver from '../GameOver/GameOver.js';



class OhNo extends React.Component {
  state = {
    fakeOut: true,
    claimPrize: true,
  };

  

}

export default OhNo;