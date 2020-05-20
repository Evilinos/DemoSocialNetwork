import React from 'react'
import preloader from '../../../assets/images/preloader.svg'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={styles.wrapper}>
            <img alt='Loading...' className={props.styles ||styles.image} src={preloader}/>
        </div>
    )
}

export default Preloader