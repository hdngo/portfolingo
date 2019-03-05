import React from 'react';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render () {
        return (
            <React.Fragment>
                <h1>Résumé <span className='abridged'>'Abridged Version'</span></h1>
                <article className='resume'>
                    <section className='resume-section resume__work'>
                        <div className='resume-section-header'>
                            <h2 className='resume-section__title'>Experience</h2>
                        </div>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>Frontend Developer / <span>Whereoware</span></h3>
                                <span className='resume__timeframe resume__timeframe--recent'>2017 - 2019</span>
                                <p className='resume__details'>Implemented designs and features for client websites including Yamaha and Woodstock Chimes.
                                    <br/>
                                    Implemented core platform updates and legacy website upgrades.
                                </p>
                            </div>
                        </article>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>UX Developer / <span>Cambridge Associates</span></h3>
                                <span className='resume__timeframe'>2016 - 2017</span>
                            </div>
                            <p className='resume__details'>Implemented public site redesign, created custom Bootstrap 4 framework, and created responsive email templates.</p>
                        </article>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>Consultant, Jr. Developer / <span>Booz Allen Hamilton</span></h3>
                                <span className='resume__timeframe'>2014-2015</span>
                            </div>
                            <p className='resume__details'>Implemented features for Department of Justice website and assisted with QA.</p>
                        </article>
                    </section>
                    <section className='resume-section resume__education'>
                        <div className='resume-section-header'>
                            <h2 className='resume-section__title'>Education</h2>
                        </div>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>Full-Stack Web Development / <span>Dev Bootcamp</span></h3>
                                <span className='resume__timeframe'>2015</span>
                            </div>
                        </article>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>B.S. Systems and Information Engineering / <span>University of Virginia</span></h3>
                                <span className='resume__timeframe'>2014</span>
                            </div>
                        </article>
                    </section>
                    <section className='resume-section resume__skills'>
                        <div className='resume-section-header'>
                            <h2 className='resume-section__title'>Skills</h2>
                        </div>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>Web Technologies, Languages, &amp; Frameworks</h3>
                            </div>
                            <p className='resume__details'>HTML5, CSS3, JavaScript, jQuery, Bootstrap, Ruby, Rails, WordPress, EPiServer, PHP, SASS, C#, ASP.NET, SQL, Angular 2, Gulp, ActiveRecord, PostgreSQL, jQuery Mobile, RSpec, Git, Bitbucket, Jira, Team Foundation Server, Heroku</p>
                            <br/>
                            <p className='resume__details'><strong>Current focuses/interests:</strong>React, WebGL, D3, GSAP, Anime, CSS Grid</p>
                        </article>
                        <article className='resume-subsection resume__work'>
                            <div className='resume-subsection-header'>
                                <h3 className='resume-subsection__title'>Tools</h3>
                            </div>
                            <p className='resume__details'>BrowserStack, FileZilla, BeyondCompare, Zeplin, Adobe Photoshop, Postman</p>
                        </article>
                    </section>
                </article>
            </React.Fragment>
        )
    }
}