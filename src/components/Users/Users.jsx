import styles from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    return <>
        <h3 className={styles.title}>Users</h3>
            {props.isFetching ? <Preloader/> : null}
        <Paginator portionSize={25} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        {
            props.users.map(u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}
                                       followingInProgress={props.followingInProgress} />)
        }
    </>
}

export default Users