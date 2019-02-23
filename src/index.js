import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './js/components/SplashPage';
import { CSSTransition } from 'react-transition-group';

let app = document.createElement('div');
app.id = 'app';

document.body.appendChild(app);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: null,
        showSplash: false,
    };
  }

  componentDidMount() {
    this.setState({showSplash: true});
  }

  render() {
    const showSplash = this.state.showSplash;
    return (
      <div className="pageBody">
        <CSSTransition
          in={showSplash}
          timeout={{
            enter: 0,
          }}
          unmountOnExit
          classNames='splashPage'
        >
          <SplashPage />
        </CSSTransition>
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