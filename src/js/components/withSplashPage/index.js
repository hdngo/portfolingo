import React from 'react';
import SplashPage from '../SplashPage';

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
            }, 5000)
        }

        removeSplashPage() {
            this.setState({loading: false});
        }

        render() {
            return this.state.loading ? <SplashPage removeSplash={this.removeSplashPage} /> : <WrappedComponent {...this.props} />
        }
    }
}

export default withSplashPage;