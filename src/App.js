import React, {Suspense} from 'react';
import styles from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {initializeApp, requestError} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        if (promiseRejectionEvent.reason) {
            this.props.requestError(promiseRejectionEvent.reason.message)
        }
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }



    render() {
        if (!this.props.initialized) return <Preloader/>;

        return <div className={styles.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={styles.appWrapperContent}>
                {this.props.error &&
                <div className={styles.requestError}>
                    <button onClick={() => this.props.requestError(null)}>X</button>
                    <div>{this.props.error}</div>
                </div>}
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Redirect from="/" to="/profile" />
                        <Redirect exact from="/DemoSocialNetwork/" to="/profile" /> {/* for deploy on gh-pages*/}
                        <Route render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </Suspense>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    error: state.app.error
});

export default connect(mapStateToProps, ({initializeApp, requestError}))(App)