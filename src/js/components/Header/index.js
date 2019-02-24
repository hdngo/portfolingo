import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <header id='header' className='header'>
                <a className='logo' href="/">LOGO</a>
                <div className='nav-primary__wrapper'>
                    <nav className='nav nav-primary'>
                        <a href="#" className='nav__link nav-primary__link'>Work</a>
                        <a href="#" className='nav__link nav-primary__link'>About Me</a>
                    </nav>
                    <div className='menu-cta'>
                    o
                    </div>
                </div>
            </header>
        )
    }
}