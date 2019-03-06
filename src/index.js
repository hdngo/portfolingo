import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './js/components/App';

let app = document.createElement('div');
document.title = 'Harvey Ngo';
app.id = 'app';

document.body.appendChild(app);

library.add(fab);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);