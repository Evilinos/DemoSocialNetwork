import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>

    }
    return (
        <div>
            <ProfileInfo profile={props.profile} isOwner={props.isOwner} updatePhoto={props.updatePhoto}
                         status={props.status} updateUserStatus={props.updateUserStatus} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>)

}

export default Profile