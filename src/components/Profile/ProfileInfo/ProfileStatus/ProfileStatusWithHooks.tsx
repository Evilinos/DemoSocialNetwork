import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from '../ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

type PropsType = {
    status: string | null
    updateUserStatus: (status: string | null) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let isPending = props.status !== status && !editMode;

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true)
    };

    const deactivateMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };


    return <div className={styles.descriptionItem}>
        {isPending && <Preloader styles={styles.preloaderStatus}/>}
        {!editMode &&
        <div>
            <span onDoubleClick={activateMode}>{props.status || '-----'}</span>
        </div>
        }
        {editMode &&
        <div>
            {/* @ts-ignore*/}
            <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}/>
        </div>}
    </div>
};

export default ProfileStatusWithHooks