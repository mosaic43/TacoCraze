import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Quiz from './Quiz.js';


  function Intro() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <div className="text">
          Test
          </div>
          <div className="text">
          <Router>
          <Switch>
        <Route path="/Quiz" component={Quiz} exact/>
        <Route path="/Intro" component={Intro} exact/>
        </Switch>
        </Router>
          </div>
          <div className="text">
            <Link to="/Quiz">Start Quiz</Link>
          </div>
        </header>
      </div>
    );
  }
  
  export default Intro;
  

  // function Intro() {
  //   return (
  //     <div className="Intro">
  //       <header className="Intro-header">
  //         <div className="text">
  //         Test
  //         </div>
  //         <div className="text">
  //         <Router>
  //         <Switch>
  //       <Route path="/Quiz" component={Quiz} exact/>
  //       <Route path="/Intro" component={Intro} exact/>
  //       </Switch>
  //       </Router>
  //         </div>
  //         <div className="text">
  //           <Link to="/Quiz">Start Quiz</Link>
  //         </div>
  //       </header>
  //     </div>
  //   );
  // }
  
  // export default Intro;




  // function Intro() {
  //   return (
  //     <div className="Intro">
  //       <header className="Intro-header">
  //         <div className="text">
  //         Test
  //         </div>
  //       </header>
  //     </div>
  //   );
  // }