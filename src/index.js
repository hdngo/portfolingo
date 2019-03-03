import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SplashPage from './js/components/SplashPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Header from './js/components/Header';
// import LeftNav from './js/components/LeftNav';
// import RightNav from './js/components/RightNav';
import { 
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './js/components/App';

let app = document.createElement('div');
app.id = 'app';

document.body.appendChild(app);

library.add(fab);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);