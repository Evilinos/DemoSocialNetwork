import styles from "./ProfileInfo.module.css";
import React from "react";
import userPhoto from "../../../assets/images/user.jpg";
import {Field, reduxForm} from "redux-form";

let ProfileDataEdit = props => {

    return <div className={styles.descriptionBlock}>
        <img alt='Avatar' src={props.profile.photos.large || userPhoto}/>
        <div className={styles.description}>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.descriptionItem}>Full name :
                    <Field component='input' type='text' name='fullName'/>
                </div>
                {/*<div className={styles.descriptionItem}>Status :*/}
                {/*    <Field component='input' type='text' name='status'/>*/}
                {/*</div>*/}
                <div className={styles.descriptionItem}>Looking For A job :
                    <Field component='select' name='lookingForAJob'>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </Field>
                </div>
                <div className={styles.descriptionItem}>Job description :
                    <Field component='input' type='text' name='lookingForAJobDescription'/>
                </div>
                <div className={styles.descriptionItem}>About :
                    <Field component='input' type='text' name='aboutMe'/>
                </div>
                <div className={styles.descriptionItem}>
                    Contacts:
                    <ul>
                        <li key={1}>Facebook: <Field component='input' type='text' name='facebook'/></li>
                        <li key={2}>website: <Field component='input' type='text' name='website'/></li>
                        <li key={3}>vk: <Field component='input' type='text' name='vk'/></li>
                        <li key={4}>twitter: <Field component='input' type='text' name='twitter'/></li>
                        <li key={5}>instagram: <Field component='input' type='text' name='instagram'/></li>
                        <li key={6}>youtube: <Field component='input' type='text' name='youtube'/></li>
                        <li key={7}>github: <Field component='input' type='text' name='github'/></li>
                        <li key={8}>mainLink: <Field component='input' type='text' name='mainLink'/></li>
                    </ul>
                </div>
                <button>Save</button>
                <button onClick={props.reset}>Back</button>
            </form>
        </div>

        <ButtonUpdateAvatar updatePhoto={props.updatePhoto} isOwner={props.isOwner}/>
    </div>
}

export const ButtonUpdateAvatar = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }
    return <>
        {props.isOwner && <div><input type='file' onChange={onMainPhotoSelected}/></div>}
    </>
}

ProfileDataEdit = reduxForm({
    form: 'edit_profile',
})(ProfileDataEdit)

export default ProfileDataEdit