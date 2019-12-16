import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Intro from './Intro';
import './Intro.css';
import MainQuiz from './QuizComponents/MainQuiz';
import GameOver from './GameOver/GameOver';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);






ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
