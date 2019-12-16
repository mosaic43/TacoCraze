import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MainQuizStyle from './MainQuizStyle.css';
import { quizData } from './quizData.js';
import GameOver from '../GameOver/GameOver.js';
import GameResults from './GameResults';


loadQuizData = () => {
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };


  export default loadQuizData