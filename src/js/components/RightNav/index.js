import React from 'react';
import Links from '../../../data/navLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CSSTransition } from 'react-transition-group';

export default class RightNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            links: Links.Links,
            show: false,
        }
    }

    componentDidMount() {
        this.setState({show: true});
        console.log('rendered');
    }

    render() {
        const show = this.state.show;
        const socialLinks = this.state.links.filter(link => link.location == 'nav-social');
        const socialItems = socialLinks.map((item, i) => (
            <a key={`nav-right-link-${item.id}`} href={item.href} className={`nav-social__link nav-social__link--${item.title.toLowerCase()}`} title={item.title} target='_blank'>
                <FontAwesomeIcon icon={['fab', `${item.fontawesome}`]} />
            </a>
        ));
        
        return(
            <CSSTransition
                in={show}
                show={{show}}
                timeout={600}
                classNames='nav-right__wrapper'
                unmountOnExit
            >
                <aside className='nav-right__wrapper'>
                    <nav className='nav nav-right nav-social'>
                        {socialItems}
                    </nav>
                    <div className='nav-line'></div>
                    <div className='mail-link'><a href='mailto:harveydngo@gmail.com' title='say hi!'>hi</a></div>
                </aside>
            </CSSTransition>
        )
    }
}