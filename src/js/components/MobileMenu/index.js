import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Links from '../../../data/navLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            links: Links.Links,
            show: this.props.show,
        }
    }

    componentDidMount() {
        this.setState({show: this.props.show});
    }

    componentWillUnmount() {
        this.setState({show: false});
    }

    componentDidUpdate(prevProps) {
        if(this.props.show !== prevProps.show) {
            this.setState({show: this.props.show});
        }
    }

    render() {
        const show = this.state.show;
        const primaryLinks = this.state.links.filter(link => link.location != 'nav-social');
        const socialLinks = this.state.links.filter(link => link.location == 'nav-social');

        const primaryItems = primaryLinks.map((item, i) => (
            <CSSTransition
                in={show}
                show={{show}}
                key={`mobile-link-transition-${item.id}`}
                timeout={500}
                classNames='nav-mobile__link'
            >
                <a key={`mobile-link-${item.id}`} href={item.href} className={`nav-mobile__link`} title={item.title}>{item.text}</a>
            </CSSTransition>
        ));
        const socialItems = socialLinks.map((item, i) => (
            <CSSTransition
                in={this.state.show}
                show={{show}}
                key={`mobile-social-link-transition-${item.id}`}
                timeout={500}
                classNames='nav-social__link'
            >
                <a key={`mobile-social-link-${item.id}`} href={item.href} className={`nav-social__link nav-social__link--${item.title.toLowerCase()}`} title={item.title}>
                    <FontAwesomeIcon icon={['fab', `${item.fontawesome}`]} />
                </a>
            </CSSTransition>
        ));
        return(
            <aside className='mobile-menu'>
                <nav className='nav nav-mobile'>
                    {primaryItems}
                </nav>
                <nav className='nav nav-social'>
                    {socialItems}
                </nav>
            </aside>
        )
    }
}