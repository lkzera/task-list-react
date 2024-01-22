import React from "react";
import styles from './style.module.css'

export const InputBox = ({ label, value, onChange }) => {

    return (
        <div className={styles.inputBoxContainer}>
            <label className={styles.inputBoxLabel}>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.inputField}
            >
            </input>
        </div>
    )
}