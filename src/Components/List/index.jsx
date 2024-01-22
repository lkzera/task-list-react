import React from "react";
import styles from './style.module.css'

export const List = ({ items, onToggle, onDelete }) => {
    return (
        <div>
            <h3>Itens:</h3>
            <ul className={styles.itemList}>
                {items.map((item, index) => (
                    <li key={index} className={`${styles.item} ${item.checked ? styles.checked : ''}`}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => onToggle(index)}
                        />
                        <span className={styles.itemText}>{item.text}</span>
                        <button onClick={() => onDelete(index)} className={styles.deleteButton}>
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}