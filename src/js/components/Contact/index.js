import React from 'react';

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return(
            <section className='contact'>
                <h1>HEYO!</h1>
                <p>Glad you made it here! If you're interested in talking shop, <span className='text-mango'>brainstorming ideas, </span>grabbing food<span className='text-mango'>or simply hanging out, </span>hit me up [at]<a href='mailto:harveydngo@gmail.com' title='email'>harveydngo@gmail.com</a> or [at]<a href='tel:7037959921' title='cell'>703.795.9921</a>.</p>
            </section>
        )
    }
}