import React from 'react';

export default class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <aside className='nav-left__wrapper'>
                <nav className='nav nav-left'>
                    <a href='' className='nav__link nav-left__link'>Coming</a>
                    <a href='' className='nav__link nav-left__link'>Soon</a>
                </nav>
            </aside>
        )
    }
}