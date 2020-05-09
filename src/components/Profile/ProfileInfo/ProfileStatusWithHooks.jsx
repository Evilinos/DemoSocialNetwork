import React, {useEffect, useState} from 'react'
import styles from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        // props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div className={styles.descriptionItem}>
        {!editMode &&
        <div>
            <span onDoubleClick={activateMode}>{props.status || '-----'}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}/>
        </div>}
    </div>
}

export default ProfileStatusWithHooks