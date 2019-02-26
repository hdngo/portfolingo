import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            links: [],
        }
    }

    componentDidMount() {
        this.setState({show: this.props.show});
    }

    componentWillUnmount() {
        this.setState({show: false});
    }

    render() {
        return(
            <aside className='mobile-menu'>
                <nav className='nav nav-mobile'>
                    <a href='#' className='nav-mobile__link'>Work</a>
                    <a href='#' className='nav-mobile__link'>About Me</a>
                    <a href='#' className='nav-mobile__link'>Coming</a>
                    <a href='#' className='nav-mobile__link'>Soon</a>
                </nav>
                <nav className='nav nav-social'>
                    <a href="#" className='nav-social__link nav-social__link--github' alt='github'><FontAwesomeIcon icon={['fab', 'github-alt']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--linkedin' alt='linkedin'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--facebook' alt='facebook'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--instagram' alt='instagram'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="#" className='nav-social__link nav-social__link--twitter' alt='twitter'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </nav>
            </aside>
        )
    }
}