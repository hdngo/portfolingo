import React from 'react';
import ReactDOM from 'react-dom';

let app = document.createElement('div');
app.id = 'app';

document.body.appendChild(app);

class App extends React.Component {
  render() {
    return (
      <div>
        Heyo
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
  // ES6 babel test
  // [1, 2, 3, 4, 5, 6].map((n) => n + 1);