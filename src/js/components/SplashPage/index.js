import React from 'react';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            cssClasses: 'splashPage',
        };
    }
    
    // runs after component is rendered
    componentDidMount() {
        console.log('show intro text');
        this.setState({cssClasses: `${this.state.cssClasses} splashPage--visible` })
    }

    componentWillUnmount() {
        console.log('remove intro text');
    }

    render() {
        return (
            <div className={this.state.cssClasses}>
                <div className='introText'><span className='introText--large'>H</span>eyo<span className='introText--large introText--bang'>!</span><br/><span className='introText--large'>I</span>'<span className='introText--last'>m</span></div>
                <div className='splashPage__name'>
                <a href="#">
                    <svg viewBox="0 0 4300 3400" preserveAspectRatio='xMaxYMax meet'>
                        <symbol id="name">
                            <text textAnchor='middle' x="50%" y="35%" className='name--first' fontWeight='bold'>Harvey</text>
                            <text textAnchor='middle' x="36.25%" y="70%" className='name--last' fontWeight='bold'>N<tspan fill="url(#goPattern)" id="go">go</tspan></text>
                        </symbol>
                        <defs>
                            <linearGradient id="goGradient" x1="0%" y1="0%" x2="0" y2="100%">
                                <stop offset="0%" stopColor="#1d5756"/>
                                <stop offset="33%" stopColor="#2ba09a"/>
                                <stop offset="55%" stopColor="#f1a503"/>
                                <stop offset="77%" stopColor="#f1a503"/>
                                <stop offset="100%" stopColor="#1d5756"/>
                            </linearGradient>
                            <pattern id="goPattern" x="0" y="0" width="100%" height="300%" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="100%" height="150%" fill="url(#goGradient)">
                                    <animate attributeType="XML"
                                            attributeName="y"
                                            from="0" to="150%"
                                            dur="7s"
                                            begin="4.5s"
                                            repeatCount="indefinite"/>
                                </rect>
                                <rect x="0" y="-150%" width="100%" height="150%" fill="url(#goGradient)">
                                    <animate attributeType="XML"
                                            attributeName="y"
                                            from="-150%" to="0"
                                            dur="7s"
                                            begin="4.5s"
                                            repeatCount="indefinite"/>
                                </rect>
                            </pattern>
                        </defs>
                        <g className="name__outline">
                            <use xlinkHref="#name" className='name__outline--copy'></use>
                            <use xlinkHref="#name" className='name__outline--copy'></use>
                            <use xlinkHref="#name" className='name__outline--copy'></use>
                            <use xlinkHref="#name" className='name__outline--copy'></use>
                            <use xlinkHref="#name" className='name__outline--copy'></use>
                        </g>
                    </svg>
                    </a>
                </div>
            </div>
        )
    }
};

export default SplashPage;