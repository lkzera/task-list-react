import React from "react";
import styles from './style.module.css'

export const Button = ({ children, onClick }) => {

    return (
        <button
            onClick={onClick}
            className={styles.buttonContainer}
        >
            {children}
        </button>
    );
}