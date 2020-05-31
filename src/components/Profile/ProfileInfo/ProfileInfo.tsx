import React, {useState} from 'react'
import styles from './ProfileInfo.module.css'
import profileBackground from '../../../assets/images/profileBackground.jpg'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileEditMode from "./ProfileEditMode/ProfileEditMode";
import {ProfileType} from "../../../types/types";

type ProfileInfoPropsType = {
    profile: ProfileType
    isOwner: boolean
    updatePhoto: (file: any) => void
    status: string | null
    updateUserStatus: (status: string | null) => void
    saveProfile: (formData: any) => Promise<ProfileType>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);
    let [pending, setPending] = useState(false);

    const onSubmit = (formData: any) => {
        setPending(true);
        saveProfile(formData).then(() => {
            setPending(false);
            setEditMode(false)
        })
    };


    return <div className={styles.wrapper}>
        <img alt='Background' className={styles.profileBackground} src={profileBackground}/>

        {editMode
        /*@ts-ignore*/
            ? <ProfileEditMode {...props} isPending={pending} initialValues={props.profile} onSubmit={onSubmit}
                               exitEditMode={() => {
                                   setEditMode(false)
                               }}/>
            : <ProfileData {...props} toEditMode={() => {
                setEditMode(true)
            }}/>}

    </div>

};

type ProfileDataPropsType = {
    profile: ProfileType
    status: string | null
    updateUserStatus: (status: string | null) => void
    isOwner: boolean
    toEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = props => {
    return <div className={styles.descriptionBlock}>
        <img alt='Avatar' src={props.profile.photos.large || userPhoto}/>
        <div className={styles.description}>
            <div className={styles.descriptionItem}>Full name: {props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            <LookingForAJob lookingForAJob={props.profile.lookingForAJob}
                            lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
            <div className={styles.descriptionItem}>About: {props.profile.aboutMe}</div>
            <Contacts contacts={props.profile.contacts}/>
            {props.isOwner && <div>
                <button onClick={props.toEditMode}>Edit</button>
            </div>}
        </div>
    </div>
};

type LookingForAJobPropsType = {
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null

}

const LookingForAJob: React.FC<LookingForAJobPropsType> = (props) => {
    return <>
        <div className={styles.descriptionItem}>Looking for a
            job: {props.lookingForAJob ? 'yes' : 'no'}</div>

        {props.lookingForAJob &&
        <div className={styles.descriptionItem}>Job
            description: {props.lookingForAJobDescription}</div>}
    </>
};

type ContactsPropsType = {
    contacts: any
}

const Contacts: React.FC<ContactsPropsType> = (props) => {
    return <div className={styles.descriptionItem}>
        Contacts:
        <ul>
            {Object.keys(props.contacts).map(key => {
                return <li key={key}>{key + ': ' + props.contacts[key]}</li>
            })}
        </ul>
    </div>
};

export default ProfileInfo