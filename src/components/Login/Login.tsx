import React from 'react'
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'
import LoginForm from './LoginForm'
import {AppStateType} from "../../redux/redux-store";

type OwnPropsType = {}
type MapStatePropsType = {
    captchaUrl: null | string
    isAuth: boolean
    isFetching: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    logout: () => void
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }



    return <div className={styles.wrapper}>
        <h1>Login</h1>
        <div style={{marginBottom: '15px'}}>Данные тестового аккаунта:<br/>
            Email: free@samuraijs.com<br/>
            Password: free</div>
        {/*@ts-ignore*/}
        <LoginForm isFetching={props.isFetching} captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    login,
    logout
})(Login)
