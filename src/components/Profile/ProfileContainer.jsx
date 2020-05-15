import React from 'react'
import Profile from './Profile'
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, saveProfile, updatePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, updatePhoto, saveProfile}),
    withRouter,
    React.memo,
)(ProfileContainer)
