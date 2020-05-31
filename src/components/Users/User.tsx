import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow,unfollow}) => {
    return <>
        {
            <div className={styles.wrapper}>
                <div className={styles.userCardPhoto}>
                    <NavLink to={"/profile/" + user.id}>
                        <img alt='Avatar' src={user.photos.small || userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      className={styles.button}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      className={styles.button}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </div>
                <div className={styles.userCard}>
                    <div className={styles.userCardCenter}>
                        <div>{user.name}</div>
                        <div className={styles.status}>{user.status}</div>
                    </div>
                    <div className={styles.userCardRight}>
                        <div>{"user.location.county"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            </div>
        }
    </>
}

export default User