import styles from './card.module.css'

export default function Card({ image, name, specie }) {

    return (
        <>
            <div className={styles.container}>
                <img src={`url(${image})`} alt="character avatar" className={styles.avatar} />
                <p className={styles.title}>{name}</p>
                <p className={styles.subTitle}>{specie}</p>
            </div>
        </>

    )
}
