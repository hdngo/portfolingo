import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './js/components/SplashPage';
import { CSSTransition } from 'react-transition-group';
import Header from './js/components/Header';
import LeftNav from './js/components/LeftNav';
import RightNav from './js/components/RightNav';

let app = document.createElement('div');
app.id = 'app';

document.body.appendChild(app);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: null,
        showSplash: true,
        showHome: false,
    };

    this.hideSplash = this.hideSplash.bind(this);
    this.showHome = this.showHome.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  hideSplash() {
    this.setState({showSplash: false});
    this.showHome();
  }

  showHome() {
    this.setState({showHome: true});
  }

  render() {
    const showSplash = this.state.showSplash;
    if(showSplash) {
      return (
        <div className="pageBody">
          <CSSTransition
            in={showSplash}
            timeout={{
              enter: 0,
              exit: 1000
            }}
            unmountOnExit
            classNames='splashPage'
          >
            <SplashPage show={showSplash} hideSplash={this.hideSplash}/>
          </CSSTransition>
        </div>
      )
    }
    else {
      return (
        <div className='pageBody'>
          <Header/>
          <LeftNav />
          <RightNav />
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
  // ES6 babel test
  // [1, 2, 3, 4, 5, 6, 7].map((n) => n + 1);