import React from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

let hatButtons = [
    {
        id: 0,
        active: true,
    },
    {
        id: 1,
        active: false,
    },
    {
        id: 2,
        active: false,
    },
    {
        id: 3,
        active: false,
    },
]

let profileSlides = [
    {
        id: 0,
        active: true,
        text: "<span className='text-mango'>Heyo! I'm a Front End Developer situated in San Jose, CA.</span> I'm actively seeking opportunities where I can continue to learn and work more with React, WebGL, D3, and web-based animations."
    },
    {
        id: 1,
        active: false,
        text: "<span className='text-mango'>Origin story: </span>Born in Virginia, and grew up in the East Coast <span className='text-mango'>(s/o to the Jersey, Philly, and NOVA folk)</span>. Front End Developer, Full Stack Human."
    },
    {
        id: 2,
        active: false,
        text: "Into 90's R&amp;B,Hip Hop, and <span className='text-mango'>Nujabes.</span>Games. Anime. Sports. Music.<span className='text-mango'>Oh, and definitely some Super Smash and foosball.</span>Occasionally dancing, frequently sleeping at abnormal hours."
    },
    {
        id: 3,
        active: false,
        text: "If you want to <Link to='/contact-me' title='get in touch!'>get in touch</Link>, feel free to shoot me a message [at]<a href='mailto:harveydngo@gmail.com' title='email'>harveydngo@gmail.com</a> or give me a call [at]<a href='tel:7037959921' title='cell'>703.795.9921</a>! <span className='text-mango'>Thanks for checking out my site!</span>"
    }
]

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            hatButtons: hatButtons,
            profileSlides: profileSlides,
            activeSlideIndex: 0
        }

        // this.debounce = this.debounce.bind(this);
        this.changeSlides = this.changeSlides.bind(this);
    }
    
    changeSlides() {
        let hatButtonsCopy = this.state.hatButtons.slice(); 
        let slidesCopy = this.state.profileSlides.slice();
        hatButtonsCopy[this.state.activeSlideIndex].active = false;
        slidesCopy[this.state.activeSlideIndex].active = false;
        let newActiveIndex = parseInt(event.target.getAttribute('data-button-id'));
        hatButtonsCopy[newActiveIndex].active = true;
        slidesCopy[newActiveIndex].active = true;
        this.setState({hatButtons: hatButtonsCopy, profileSlides: slidesCopy, activeSlideIndex: newActiveIndex});
    }

    /*debounce(func, delay) {
        let timeout;
        return function(...args) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                func(...args);
                timeout = null;
            }, delay);
        }
    }*/
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const hatItems = this.state.hatButtons.map((hat, i) => (
            <li className='hat' key={`hat-${hat.id}`}>
                <div className={`hat-button ${hat.active ? 'hat-button--active' : ''}`} data-button-id={hat.id} onClick={this.changeSlides}>
                    &nbsp;
                </div>
            </li>
        ));

        const profileSlides = this.state.profileSlides.map((slide, i) => (
            <div className={`profile-slide ${slide.active ? 'profile-slide--active' : ''}`} key={`slide-${slide.id}`} data-slide-id={slide.id}>
                <p className='profile-statement'>{Parser(slide.text)}</p>
            </div>
        ));
        return (
            <section className='profile'>
                <h1>Harvey Ngo</h1>
                <ul className='hat-panel'>
                    { hatItems }
                </ul>
                <div className='profile-slider'>
                    {profileSlides}
                </div>
            </section>
        )
    }
}

