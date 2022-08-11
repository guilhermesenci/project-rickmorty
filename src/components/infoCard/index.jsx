import styles from './infoCard.module.css'

export default function InfoCard({ title, subTitle, text, onClick }) {

    return (
        <>
            <div className={styles.container} onClick={onClick}>
                <div className={styles.textArea}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.subTitle}>{subTitle}</span>
                    <span className={styles.text}>{text}</span>
                </div>
            </div>
        </>

    )
}
