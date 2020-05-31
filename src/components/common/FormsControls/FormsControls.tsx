import React from "react";
import styles from './FormsControls.module.css'

type TextareaPropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return <>
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </>
};

type InputPropsType = {
    input: any
    meta: any
}

export const Input: React.FC<InputPropsType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return <>
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </>
};