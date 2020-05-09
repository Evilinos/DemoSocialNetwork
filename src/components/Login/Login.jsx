import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'

let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} validate={[required]}
                       placeholder={"Email"} name={'email'} />
            </div>
            <div>
                <Field component={Input} validate={[required]} type={'password'}
                       placeholder={"Password"} name={'password'} />
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> Remember Me
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout})(Login)
