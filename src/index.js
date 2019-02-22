import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './js/components/SplashPage';

let app = document.createElement('div');
app.id = 'app';

document.body.appendChild(app);

class App extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <SplashPage />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
  // ES6 babel test
  // [1, 2, 3, 4, 5, 6, 7].map((n) => n + 1);