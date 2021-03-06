import React from 'react';
import MobileMenu from '../MobileMenu/';
import Links from '../../../data/navLinks';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            showMobileMenu: false,
            links: Links.Links,
            showHeaderLinks: false,
        }

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    componentDidMount() {
        this.setState({showHeaderLinks: true, showMobileMenu: false});
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({showMobileMenu: false});
        }
    }

    toggleMobileMenu() {
        this.setState({showMobileMenu: !this.state.showMobileMenu});
    }

    render() {
        const showMobileMenu = this.state.showMobileMenu;
        const showHeaderLinks = this.state.showHeaderLinks;
        const mainLinks = this.state.links.filter(link => link.location === 'nav-primary');
        const mainLinkItems = mainLinks.map((item, i) => (
            <CSSTransition
                in={showHeaderLinks}
                show={{showHeaderLinks}}
                timeout={400}
                key={`nav-left-transition-${item.id}`}
                classNames='nav-primary__link'
            >
                <Link key={`nav-primary-link-${item.id}`} to={item.href} className='nav__link nav-primary__link' title={item.title}>{item.text}</Link>
            </CSSTransition>
        ));
        return (
            <header id='header' className={`header ${this.state.showMobileMenu ? 'header--mobileActive' : 'header--mobileHidden'}`}>
                <Link className='logo' to="/home"><span>HN</span></Link>
                <div className='nav-primary__wrapper'>
                    <nav className='nav nav-primary'>
                        {mainLinkItems}
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
                        exit: 600,
                    }}
                    classNames='mobile-menu'
                >
                    <MobileMenu show={showMobileMenu}/>
                </CSSTransition>
            </header>
        )
    }
}

export default withRouter(props => <Header {...props} />);