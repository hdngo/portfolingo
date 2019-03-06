import React from 'react';
import SplashPage from '../SplashPage';
import { CSSTransition } from 'react-transition-group';

function withSplashPage(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            }

            this.removeSplashPage = this.removeSplashPage.bind(this);
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    loading: false,
                });
            }, 6000)
        }

        removeSplashPage() {
            this.setState({loading: false});
        }

        render() {
            const showSplash = this.state.loading;
            return showSplash ? 
                <CSSTransition in={showSplash} show={{showSplash}.toString()} classNames='splashPage' timeout={{enter:0, exit: 600}} unmountOnExit>
                    <SplashPage removeSplash={this.removeSplashPage} />
                </CSSTransition> : 
                <WrappedComponent {...this.props} />
        }
    }
}

export default withSplashPage;