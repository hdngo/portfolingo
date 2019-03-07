import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import withSplashPage from '../withSplashPage';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import LeftNav from '../LeftNav';
import RightNav from '../RightNav';
import Home from '../Home';
import Work from '../Work';
import Resume from '../Resume';
import About from '../About';
import Contact from '../Contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Nada = () => {
    return (
        <React.Fragment>
            <h1 className='fohfour'>F0H4 Not found.</h1>
        </React.Fragment>
    )
}

const PrimaryLayout = () => (
    <Route render={({ location }) => (
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
        <main className='page page-layout'>
        <Header />
            <LeftNav/>
            <RightNav/>
            <TransitionGroup className='page-body'>
                <CSSTransition
                    key={location.key}
                    timeout={650}
                    classNames='page'
                >
                <section className='page-content'>
                    <Switch location={location}>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/work' component={Work} />
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/about-me' component={About} />
                        <Route exact path='/contact-me' component={Contact} />
                        <Route component={Nada} />
                    </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </main>
        </React.Fragment>
    )}/>
)

class App extends React.Component {
    render() {
        return (
            <PrimaryLayout />
        )
    }
}

export default withSplashPage(App);