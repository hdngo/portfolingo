import React from 'react';
import Nala from '../Nala';
import { CSSTransition } from 'react-transition-group';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            showWelcome: false,
        }
    }

    componentDidMount() {
        this.setState({showWelcome: true});
    }

    render (){
        const showWelcome = this.state.showWelcome;
        return (
            <React.Fragment>
                <CSSTransition
                    in={showWelcome}
                    show={{showWelcome}.toString()}
                    classNames='welcome'
                    timeout={1100}
                >
                <h1 className='welcome'>Welcome to <span className='strikethrough text-teal'>my site</span> <span className='nala-rules-all text-mango'>Nala's territory,</span></h1>
                </CSSTransition>
                <CSSTransition
                    in={showWelcome}
                    show={{showWelcome}.toString()}
                    timeout={1700}
                    classNames='start-text'
                >
                    <p className='start-text'>click around to check it out!</p>
                </CSSTransition>
                <Nala />
            </React.Fragment>
        )
    }
}