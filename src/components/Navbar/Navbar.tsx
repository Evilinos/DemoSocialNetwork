import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {}

const Navbar: React.FC<PropsType> = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Settings</div>
            <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Find Users</NavLink></div>
        </nav>
    )
}

export default Navbar