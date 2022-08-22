import styles from './inputMenu.module.css';
import magnifying from '../../assets/icon/magnifying.svg'

export default function InputText({ placeHolder, name, onChange, value, size }) {
    return (
        <div
            className={styles.inputArea}
            style={{ width: size ? `${size}px` : '' }}
        >
            <label htmlFor="inputText" className={styles.inputTextLabel}>
                <img src={magnifying} />
            </label>
            <input
                type="text"
                className={styles.inputText}
                placeholder={placeHolder}
                id="inputText"
                name={name}
                onChange={onChange}
                value={value}
            >
            </input>
        </div>
    )
}