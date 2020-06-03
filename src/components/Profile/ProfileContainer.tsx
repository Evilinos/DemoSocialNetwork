import React from 'react'
import Profile from './Profile'
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, saveProfile, updatePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter, Redirect} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type OwnPropsType = {}
type RouterPropsType = {
    match: any
    history: any
}
type MapStatePropsType = {
    profile: ProfileType
    status: string | null
    authUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    updatePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}


type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType & RouterPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) this.props.history.push('/login')
        }
        if (userId) {
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        if (!this.props.isAuth && !this.props.match.params.userId) return <Redirect to={'/login'}/>

        // eslint-disable-next-line no-lone-blocks
        {/*@ts-ignore*/}
        return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus, updatePhoto, saveProfile}),
    withRouter,
    React.memo,
)(ProfileContainer)
