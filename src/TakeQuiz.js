
import React from 'react';
import './Quiz.css';
import Question from './Question';
import QuizQuestions from './QuizQuestions';
import Quiz from './Quiz';
import update from 'react-addons-update';

// var update = require('react-addons-update');

function componentWillMount(){
    const shuffledAnswerOptions = QuizQuestions.map((question) => this.shuffleArray(question.answers));  
    
    this.setState({
      question: QuizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  };

  function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
class MultipleChoice extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       true: 0,
       false: 0,
     },
     result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
};
}

function setUserAnswer(answer) {
    const updatedAnswerCount = update(this.state.answersCount, {
        [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
        answersCount: updatedAnswerCount,
        answer: answer
    });
}

function setNextQuestion(){
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
        counter:counter,
        questionId: questionId,
        question: QuizQuestions[counter].question,
        answerOptions: QuizQuestions[counter].answers,
        answer: ''
    });
}

function getResults () {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((keys) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
}

function setResults (result) {
    if (result.length ===1) {
        this.setState({ result: result[0] });
    } else {
        this.setState({ result: 'Undetermined' });
    }
}

function handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < QuizQuestions.length) {
        setTimeout (() => this.setNextQuestion(), 300);
    } else {
        setTimeout (()=> this.setResults(this.getResults()), 300);
    }
}

function renderQuiz() {
  return (
    <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
    />
  );
}
function renderResult() {
  return (
    <Result quizResult={this.state.result} />
  );
}

function TakeQuiz(){
  render (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      <Question content="What is your favourite food?" />
    </div>
  );
// return (
//     <div className="Quiz">
//       <div className="QuizBox">
//         <h2>React Quiz</h2>
//         <MultipleChoice />
//       </div>
//       {this.state.result ? this.renderResult() : this.renderQuiz()}
//         <Question content="What is your favourite food?" />
//     </div>
//   );  
}
  

export default TakeQuiz;



//   import React from 'react';
// import Question from './Question';
// import QuestionCount from './QuestionCount';
// import AnswerOtion from './AnswerOption';

// function renderAnswerOptions(key) {
//     return (
//       <AnswerOption
//         key={key.content}
//         answerContent={key.content}
//         answerType={key.type}
//         answer={props.answer}
//         questionId={props.questionId}
//         onAnswerSelected={props.onAnswerSelected}
//       />
//     );
//   }

// function TakeQuiz(props) {
//     return (
//        <div className="Takequiz">
//          <QuestionCount
//            counter={props.questionId}
//            total={props.questionTotal}
//          />
//          <Question content={props.question} />
//          <ul className="answerOptions">
//            {props.answerOptions.map(renderAnswerOptions)}
//          </ul>
//        </div>
//     );
//   }
//   TakeQuiz.propTypes = {
//     answer: React.PropTypes.string.isRequired,
//     answerOptions: React.PropTypes.array.isRequired,
//     counter: React.PropTypes.number.isRequired,
//     question: React.PropTypes.string.isRequired,
//     questionId: React.PropTypes.number.isRequired,
//     questionTotal: React.PropTypes.number.isRequired,
//     onAnswerSelected: React.PropTypes.func.isRequired
//   };
//   export default TakeQuiz;









// <Quiz
// answer={this.state.answer}
// answerOptions={this.state.answerOptions}
// questionId={this.state.questionId}
// question={this.state.question}
// questionTotal={QuizQuestions.length}
// onAnswerSelected={this.handleAnswerSelected}
// />