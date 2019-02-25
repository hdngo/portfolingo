import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            showMobileMenu: false,
        }

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    componentDidMount() {
    }

    toggleMobileMenu() {
        this.setState({showMobileMenu: !this.state.showMobileMenu});
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
                    <div className='menu-cta__wrapper'>
                        <button className={`menu-cta__mobile-toggle ${this.state.showMobileMenu ? 'menu-cta__mobile--active' : ''}`} onClick={this.toggleMobileMenu}>
                            <div className='menu-bar menu-bar--default'></div>
                            <div className='menu-bar menu-bar--default'></div>
                            <div className='menu-bar menu-bar--default'></div>
                            <div className='menu-bar menu-bar--close'></div>
                            <div className='menu-bar menu-bar--close'></div>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}