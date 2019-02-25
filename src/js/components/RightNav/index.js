import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RightNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return(
            <aside className='nav-right__wrapper'>
                <nav className='nav nav-right nav-social'>
                    <a href="#" className='nav-social__link nav-social__link--github' alt='github'><FontAwesomeIcon icon={['fab', 'github-alt']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--linkedin' alt='linkedin'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--facebook' alt='facebook'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--instagram' alt='instagram'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--twitter' alt='twitter'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </nav>
                <hr className='nav-line'></hr>
                <div className='page-indicator'>H</div>
            </aside>
        )
    }
}