import React from 'react';
import IntroText from '../IntroText/';
import IntroName from '../IntroName';
import { CSSTransition } from 'react-transition-group';

    export default class SplashPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: null,
            };
        }
        
        // runs after component is rendered
        componentDidMount() {
        }
    
        componentWillUnmount() {
        }
    
        render() {
            const show = this.state.show;
            return (
                <div className='splashPage'>
                    <IntroText />
                    <IntroName removeSplashPage={this.props.removeSplashPage} />
                </div>
            )
        }
    };
    