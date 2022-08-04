import styles from './infoText.module.css'
import IconRight from '../../assets/icon/IconRight.svg'

export default function InfoText({ title, subtitle, otherTitle, onClick, button }) {

    return (
        <div className={styles.container} onClick={onClick} style={{ cursor: button ? 'pointer' : null }}>
            <div className={styles.textArea}>
                <span className={styles.title}>{title}</span>
                <span className={styles.subTitle}>{subtitle}</span>
                <span className={styles.otherTitle}>{otherTitle}</span>
            </div>
            {button ? <img src={IconRight} className={styles.button} /> : null}
        </div>
    )
}