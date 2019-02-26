import React from 'react';
import Links from '../../../data/navLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RightNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            links: Links.Links,
        }
    }

    render() {
        const socialLinks = this.state.links.filter(link => link.location == 'nav-social');
        const socialItems = socialLinks.map((item, i) => (
            <a key={`nav-right-link-${item.id}`} href={item.href} className={`nav-social__link nav-social__link--${item.title.toLowerCase()}`} title={item.title}>
                <FontAwesomeIcon icon={['fab', `${item.fontawesome}`]} />
            </a>
        ));
        
        return(
            <aside className='nav-right__wrapper'>
                <nav className='nav nav-right nav-social'>
                    {socialItems}
                </nav>
                <hr className='nav-line'></hr>
                <div className='page-indicator'>H</div>
            </aside>
        )
    }
}