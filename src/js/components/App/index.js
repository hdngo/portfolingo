import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import withSplashPage from '../withSplashPage';
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
        <main className='page page-layout'>
        <Header />
        {/* <main className='page-body'> */}
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