import React from 'react';
import IntroText from '../IntroText/';
import IntroName from '../IntroName';
import { CSSTransition } from 'react-transition-group';

export default class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            show: false,
        };
    }
    
    // runs after component is rendered
    componentDidMount() {
        this.setState({show: true })
    }

    componentWillUnmount() {
        console.log('remove intro text');
    }

    render() {
        const show = this.state.show;
        return (
            <div className='splashPage'>
                <CSSTransition
                    in={show}
                    timeout={{
                        enter: 1400,
                    }}
                    unmountOnExit
                    classNames='introText'
                >
                    <IntroText />
                </CSSTransition>
                {/* could use non-zero and adjust css, but
                experimenting with zero timeouts to try and better understand
                timing */}
                <CSSTransition
                    in={show}
                    timeout={{
                        enter: 0,
                    }}
                    unmountOnExit
                    classNames='introName'
                >
                    <IntroName />
                </CSSTransition>
            </div>
        )
    }
};