import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'
import Preloader from "../common/Preloader/Preloader";

let LoginForm = ({handleSubmit, error, captchaUrl, isFetching}) => {
    return <>
        {isFetching && <Preloader styles={styles.preloader}/>}
        <form onSubmit={handleSubmit}>
            <Field component={Input} validate={[required]}
                   placeholder={"Email"} name={'email'}/>
            <Field component={Input} validate={[required]} type={'password'}
                   placeholder={"Password"} name={'password'}/>

            <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> Remember Me
            {captchaUrl && <div>
                <img src={captchaUrl}/>
                <div><Field component='input' type='text' name='captcha' validate={[required]}/></div>
            </div>}
            {error && <div className={s.error}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={styles.wrapper}>
        <h1>Login</h1>
        <LoginForm isFetching={props.isFetching} captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})
export default connect(mapStateToProps, {login, logout})(Login)
