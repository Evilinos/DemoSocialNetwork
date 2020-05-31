import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType
    status: string | null
    authUserId: number | null
    updateUserStatus: (status: string | null) => void
    updatePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => Promise<ProfileType>
    isOwner: boolean
}

const Profile: React.FC<PropsType> = (props) => {

    if (!props.profile) {
        return <Preloader/>

    }
    return (
        <>
            <ProfileInfo profile={props.profile} isOwner={props.isOwner} updatePhoto={props.updatePhoto}
                         status={props.status} updateUserStatus={props.updateUserStatus} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </>)

}

export default Profile