import styles from './header.module.css'

export default function Header({ logoImage }) {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logoImage} />
            </header>
        </div>
    )
}