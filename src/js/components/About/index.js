import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }

        this.handleProfileScroll = this.handleProfileScroll.bind(this);
        this.debounce = this.debounce.bind(this);
        this.changeSlides = this.changeSlides.bind(this);
    }
    
    changeSlides(currentIndex = 0, nextIndex = 1) {
        const profileSlides = document.querySelectorAll('.profile-slide');
        let currentSlideIndex = currentIndex == 0 ? parseInt(document.querySelector('.profile-slide--active').getAttribute('data-id')) : currentIndex;
        let nextSlideIndex = nextIndex == 1 ? 1 : nextIndex; 
        profileSlides[currentSlideIndex].classList.remove('profile-slide--active');
        profileSlides[nextSlideIndex].classList.add('profile-slide--active');    
    }

    handleProfileScroll(e) {
        const profileSlides = document.querySelectorAll('.profile-slide');
        let activeSlide = document.querySelector('.profile-slide--active');
        let activeIndex = parseInt(activeSlide.getAttribute('data-id'));
        if (e.deltaY < 0) {
            if(activeIndex == 0) {
                return;
            }
    
            else if(activeIndex > 0) {
                this.changeSlides(activeIndex, activeIndex - 1);
            }
        }
        else {
            if(activeIndex == profileSlides.length -1){
                return;
            }
            else {
                this.changeSlides(activeIndex, activeIndex + 1);
            }
        }
    }

    debounce(func, delay) {
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
    }
    
    componentDidMount() {
        window.addEventListener('wheel', this.debounce(this.handleProfileScroll, 1000));
        console.log('?');
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleProfileScroll);
    }

    


    render() {
        return (
            <section className='profile'>
                <h1>Harvey Ngo</h1>
                <ul className='hat-panel'>
                    <li className='hat'><div className='hat-button' onClick={this.changeSlides}>&nbsp;</div></li>
                    <li className='hat'><div className='hat-button' onClick={this.changeSlides}>&nbsp;</div></li>
                    <li className='hat'><div className='hat-button' onClick={this.changeSlides}>&nbsp;</div></li>
                    <li className='hat'><div className='hat-button' onClick={this.changeSlides}>&nbsp;</div></li>
                </ul>
                <div className='profile-slider'>
                    <div className='profile-slide profile-slide--active' data-id='0'>
                        <p className='profile-statement'><span className='text-mango'>Heyo! I'm a Front End Developer situated in San Jose, CA.</span> I'm actively seeking opportunities where I can continue to learn and work more with React, WebGL, D3, and web-based animations.</p>
                    </div>
                    <div className='profile-slide' data-id='1'>
                        <p className='profile-statement'><span className='text-mango'>A little bit on me.</span>Born in Virginia, and grew up in the East Coast <span className='text-mango'>(s/o to the Jersey, Philly, and NOVA folk)</span>. Front End Developer, Full Stack Human.</p>
                    </div>
                    <div className='profile-slide' data-id='2'>
                        <p className='profile-statement'>Into 90's R&amp;B,Hip Hop, and <span className='text-mango'>Nujabes.</span>Games. Anime. Sports. Music.<span className='text-mango'>Oh, and definitely some Super Smash (melee) and foosball.</span>Occasionally dancing, frequently sleeping at abnormal hours.</p>
                    </div>
                    <div className='profile-slide' data-id='3'>
                        <p className='profile-statement'></p>
                    </div>
                </div>
                
            </section>
        )
    }
}