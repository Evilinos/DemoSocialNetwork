import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={styles.header}>
        <img alt='Logo' src='https://i.pinimg.com/736x/5a/ae/50/5aae503e4f037a5a4375944d8861fb6a.jpg'/>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>
                    {props.login} <div><button onClick={props.logout}>Log out</button></div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header