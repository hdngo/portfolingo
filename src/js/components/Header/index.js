import React from 'react';
import MobileMenu from '../MobileMenu/';
import { CSSTransition } from 'react-transition-group';

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
        const showMobileMenu = this.state.showMobileMenu;
        return (
            <header id='header' className={`header ${this.state.showMobileMenu ? 'header--mobileActive' : 'header--mobileHidden'}`}>
                <a className='logo' href="/">LOGO</a>
                <div className='nav-primary__wrapper'>
                    <nav className='nav nav-primary'>
                        <a href="#" className='nav__link nav-primary__link'>Work</a>
                        <a href="#" className='nav__link nav-primary__link'>About Me</a>
                    </nav>
                    <div className='menu-cta__wrapper'>
                        <button className={`menu-cta ${this.state.showMobileMenu ? 'menu-cta--active' : ''}`} onClick={this.toggleMobileMenu}>
                            <div className='menu-bar menu-bar--default'></div>
                            <div className='menu-bar menu-bar--default'></div>
                            <div className='menu-bar menu-bar--default'></div>
                            <div className='menu-bar menu-bar--close'></div>
                            <div className='menu-bar menu-bar--close'></div>
                        </button>
                    </div>
                </div>
                <CSSTransition
                    in={showMobileMenu}
                    show={showMobileMenu}
                    timeout={{
                        appear: 0,
                        enter: 400,
                        exit: 400,
                    }}
                    classNames='mobile-menu'
                >
                    <MobileMenu show={showMobileMenu} />
                </CSSTransition>
            </header>
        )
    }
}