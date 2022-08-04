import styles from './card.module.css'

export default function Card({ img, name, specie, handleClick }) {

    return (
        <>
            <div className={styles.container} onClick={handleClick}>
                {img ? <img src={img} alt="picture" className={styles.avatar} /> : null}
                <div className={styles.textArea}>
                    <span className={styles.title}>{name}</span>
                    <span className={styles.subTitle}>{specie}</span>
                </div>
            </div>
        </>

    )
}
