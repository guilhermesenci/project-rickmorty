import styles from './loader.module.css'
import spinnerImg from '../../assets/loading.svg'

export default function Loarder() {
    return (
        <div className={styles.loadingDiv}>
            <div className={styles.loadingImg}>< img src={spinnerImg} className={styles.rotate} /></div>
        </div>
    )

}