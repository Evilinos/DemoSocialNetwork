import React from 'react'
import styles from './ProfileInfo.module.css'
import profileBackground from '../../../assets/images/profileBackground.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.profileBackground} src={profileBackground}/>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div className={styles.description}>
                    <div className={styles.descriptionItem}>Full name: {props.profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    <div className={styles.descriptionItem}>About: {props.profile.aboutMe}</div>
                    <div className={styles.descriptionItem}>Contacts:
                        <ul>
                            <li>facebook: {props.profile.contacts.facebook}</li>
                            <li>website: {props.profile.contacts.website}</li>
                            <li>vk: {props.profile.contacts.vk}</li>
                            <li>twitter: {props.profile.contacts.twitter}</li>
                            <li>instagram: {props.profile.contacts.instagram}</li>
                            <li>youtube: {props.profile.contacts.youtube}</li>
                            <li>github: {props.profile.contacts.github}</li>
                            <li>mainLink: {props.profile.contacts.mainLink}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)

}

export default ProfileInfo