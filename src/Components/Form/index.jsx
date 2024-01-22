import React, { useState } from "react";
import styles from './style.module.css'
import { InputBox } from "../Input";
import { Button } from "../Button";
import { List } from "../List";

export const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleButtonClick = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { text: inputValue, checked: false }]);
            setInputValue('');
        }
    };

    const handleToggle = (index) => {
        setTasks((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const handleDelete = (index) => {
        setTasks((prevItems) => prevItems.filter((item, i) => i !== index));
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <InputBox
                        label="Task Name:"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <Button onClick={handleButtonClick}>Save</Button>
            </div>
            <List items={tasks} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
    )
}