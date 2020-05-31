import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilities/validators/validators";
import styles from './Login.module.css'
import s from '../common/FormsControls/FormsControls.module.css'

type PropsType = {
    handleSubmit: any
    error: string
    captchaUrl: string | null
    isFetching: boolean
}

const LoginForm: React.FC<PropsType> = ({handleSubmit, error, captchaUrl, isFetching}) => {
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
// @ts-ignore
export default reduxForm({form: 'login'})(LoginForm)
