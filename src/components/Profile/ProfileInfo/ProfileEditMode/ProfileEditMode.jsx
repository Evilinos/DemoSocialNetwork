import styles from "../ProfileInfo.module.css";
import React from "react";
import userPhoto from "../../../../assets/images/user.jpg";
import {Field, reduxForm} from "redux-form";
import s from '../../../common/FormsControls/FormsControls.module.css'

let ProfileEditMode = props => {

    return <div className={styles.descriptionBlock}>
        <img alt='Avatar' src={props.profile.photos.large || userPhoto}/>
        <div className={styles.description}>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.descriptionItem}>Full name :
                    <Field component='input' type='text' name='fullName'/>
                </div>
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
                    {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key}>
                            {key + ": "}<Field component='input' type='text' name={`contacts.${key}`}/>
                        </div>
                    })}
                </div>
                {props.error && <div className={s.error}>{props.error}</div>}
                <button>Save</button>
                <button onClick={props.exitEditMode}>Back</button>
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

ProfileEditMode = reduxForm({
    form: 'edit_profile',
})(ProfileEditMode)

export default ProfileEditMode