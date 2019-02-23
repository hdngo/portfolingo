import React from 'react';

export default class IntroText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    
    render() {
        return (
            <div className='introText'>
                <span className='introText--large'>H</span>eyo<span className='introText--large introText--bang'>!</span><br/><span className='introText--large'>I</span>'<span className='introText--last'>m</span>
            </div>
        )
    }
};