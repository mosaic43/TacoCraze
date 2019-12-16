import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MainQuizStyle from './MainQuizStyle.css';
import { quizData } from './quizData.js';
import GameOver from '../GameOver/GameOver.js';



class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }
    if (this.state.currentQuestion < quizData.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      });
    } else {
      this.finishHandler()
    }

    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }

  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
    this.timer = setTimeout(() => { this.nextQuestionHandler()}, 1000);

  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    let gameResults = "";
if(this.state.score > 2) {
  gameResults = "Winner, winner, taco dinner!"
} else {
  gameResults = "Sorry, no tacos for you. . . :( "
}
    if (isEnd) {
      return (
        <div className="results">
            
          <h3>{gameResults} <br /> You scored {this.state.score} points </h3>
          <p>
            Here's the correct answers:
            <ul>
              {quizData.map((item, index) => (
                <li className="alerts mouse" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
          <Link to="/GameOver">Go get your tacos!</Link>
        </div>
      );
    } else {
      return (
        <div className="MainQuiz">
          <h1>{this.state.questions} </h1>
          <span>{`Question ${currentQuestion} of ${quizData.length}`}</span>
          <div>Score: {this.state.score}</div>
          {options.map(option => (
            <p
              key={option.id}
              className={` alerts floating QuizChoices
         ${myAnswer === option ? "highlightChoice" : null}
         `}
         onClick={() => {this.checkAnswer(option)}}
            >
              {option}
            </p>
          ))}
        </div>
      );
    }
  }
}

export default MainQuiz;

// render() {
//   const { options, myAnswer, currentQuestion, isEnd } = this.state;
//   let gameResults = "";
// if(this.state.score > 2) {
// gameResults = "Winner, winner, taco dinner!"
// } else {
// gameResults = "Sorry, no tacos for you. . . :( "
// }
//   if (isEnd) {
//     return (
//       <div className="results">
          
//         <h3>{gameResults} <br /> You scored {this.state.score} points </h3>
//         <p>
//           Here's the correct answers:
//           <ul>
//             {quizData.map((item, index) => (
//               <li className="alerts mouse" key={index}>
//                 {item.answer}
//               </li>
//             ))}
//           </ul>
//         </p>
//         <Link to="/GameOver">Go get your tacos!</Link>
//       </div>
//     );
//   } else {
//     return (
//       <div className="MainQuiz">
//         <h1>{this.state.questions} </h1>
//         <span>{`Question ${currentQuestion} of ${quizData.length}`}</span>
//         <div>Score: {this.state.score}</div>
//         {options.map(option => (
//           <p
//             key={option.id}
//             className={` alerts floating QuizChoices
//        ${myAnswer === option ? "highlightChoice" : null}
//        `}
//        onClick={() => {this.checkAnswer(option)}}
//           >
//             {option}
//           </p>
//         ))}
//       </div>
//     );
//   }
// }