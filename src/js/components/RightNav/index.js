import React from 'react';

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
                    <a href="#" className='nav-social__link nav-social__link--github'>G</a>
                    <a href="#" className='nav-social__link nav-social__link--linkedin'>L</a>
                    <a href="#" className='nav-social__link nav-social__link--facebook'>F</a>
                    <a href="#" className='nav-social__link nav-social__link--instagram'>I</a>
                    <a href="#" className='nav-social__link nav-social__link--twitter'>T</a>
                </nav>
            </aside>
        )
    }
}