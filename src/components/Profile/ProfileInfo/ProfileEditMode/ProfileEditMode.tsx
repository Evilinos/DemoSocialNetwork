import styles from "../ProfileInfo.module.css";
import React from "react";
import userPhoto from "../../../../assets/images/user.jpg";
import {Field, reduxForm} from "redux-form";
import s from '../../../common/FormsControls/FormsControls.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
    handleSubmit: () => void
    error: string | null
    exitEditMode: () => void
    isPending: boolean
    isOwner: boolean
    updatePhoto: (file: any) => void
}

const ProfileEditMode: React.FC<PropsType> = props => {

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
            {props.isPending && !props.error && <Preloader styles={styles.preloaderProfile}/>}
        </div>

        <ButtonUpdateAvatar updatePhoto={props.updatePhoto} isOwner={props.isOwner}/>
    </div>
};

type ButtonUpdateAvatarPropsType = {
    updatePhoto: (file: any) => void
    isOwner: boolean
}

export const ButtonUpdateAvatar: React.FC<ButtonUpdateAvatarPropsType> = (props) => {
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    };
    return <>
        {props.isOwner && <div><input type='file' onChange={onMainPhotoSelected}/></div>}
    </>
};

// @ts-ignore
export default reduxForm({form: 'edit_profile'})(ProfileEditMode)