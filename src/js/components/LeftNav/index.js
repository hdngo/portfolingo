import React from 'react';
import Links from '../../../data/navLinks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            links: Links.Links,
            showLinks: false,
        }
    }

    componentDidMount() {
        this.setState({showLinks: true});
    }

    render() {
        const showLinks = this.state.showLinks;
        const leftNavLinks = this.state.links.filter(link => link.location == 'nav-left');
        const leftNavItems = leftNavLinks.map((item, i) => (
            <CSSTransition
                in={showLinks}
                show={{showLinks}}
                key={`nav-left-transition-${item.id}`}
                timeout={400}
                classNames='nav-left__link'
            >
                <a key={`nav-left-link-${item.id}`} href={item.href} className={`nav__link nav-left__link`} title={item.title}>{item.text}</a>
            </CSSTransition>
        ));

        return (
            <aside className='nav-left__wrapper'>
                <nav className='nav nav-left'>
                    {leftNavItems}
                </nav>
            </aside>
        )
    }
}