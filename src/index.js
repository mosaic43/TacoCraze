import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Intro from './Intro';
import './Intro.css';
import MainQuiz from './QuizComponents/MainQuiz';
import GameOver from './GameOver/GameOver';
import FakeGameOver from './FakeGameOver';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import MatchGame from './Matching/MatchGame';

const store = createStore(rootReducer);






ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
