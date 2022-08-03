import styles from './SelectMenu.module.css'

function SelectMenu({ children }) {
    return (
        <div>
            <select className={styles.inputSelect}>
                {children}
            </select>
        </div>
    )
}

export default SelectMenu