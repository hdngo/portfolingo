import React from 'react';
import { Helmet } from 'react-helmet';
import IntroText from '../IntroText/';
import IntroName from '../IntroName';
import { CSSTransition } from 'react-transition-group';

    export default class SplashPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: null,
            };
        }
        
        // runs after component is rendered
        componentDidMount() {
        }
    
        componentWillUnmount() {
        }
    
        render() {
            const show = this.state.show;
            return (
            <React.Fragment>
                <Helmet>
                <title>Harvey Ngo</title>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
                <meta name='description' content='Temporary cyber dwelling for a digital ngomad.'></meta>
                <meta name='theme-color' content='#ffffff'></meta>
                <meta name='twitter:card' content='summary'></meta>
                <meta name='twitter:site' content='Harvey Ngo'></meta>
                <meta name='twitter:title' content='Page Title'></meta>
                <meta name='twitter:description' content='Temporary cyber dwelling for a digital ngomad.'></meta>
                <meta name='twitter:creator' content='@harveydngo'></meta>
                <meta property='og:title' content='Harvey Ngo' />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://www.harveydngo.com/' />
                <meta property='og:locale' content='en_US'></meta>
                <meta property='og:description' content='Temporary cyber dwelling for a digital ngomad.' />
                <meta property='og:site_name' content='Harvey Ngo' />
                <meta property='fb:admins' content='1212893460' />
                </Helmet>
                <div className='splashPage'>
                    <IntroText />
                    <IntroName removeSplashPage={this.props.removeSplashPage} />
                </div>
            </React.Fragment>
            )
        }
    };
    