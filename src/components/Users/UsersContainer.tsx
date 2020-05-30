import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}
type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        if (this.props.users.length === 0) {
            this.props.requestUsers(currentPage, pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber)
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <>
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {setCurrentPage, requestUsers, follow, unfollow,}),
    React.memo,
)(UsersContainer)
