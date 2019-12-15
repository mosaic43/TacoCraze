import React from 'react';
import './App.css';
import Intro from './Intro.js';
// import TakeQuiz from './TakeQuiz.js';
import MainQuiz from './QuizComponents/MainQuiz';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Play from './Play.js';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
          <Switch>
        <Route path="/Intro" component={Intro} exact/>
        <Route path="/MainQuiz" component={MainQuiz} exact/>
        <Route path="/" component={Play} exact/>
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
