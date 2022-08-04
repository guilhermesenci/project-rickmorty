import styles from './infoText.module.css'

export default function InfoText({ title, subtitle, otherTitle }) {

    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <span className={styles.subTitle}>{subtitle}</span>
            <span>{otherTitle}</span>
        </div>
    )

}