import React from 'react'
import useFetch from '.././../hooks/useFetch'
import Card from '../../components/card'

import styles from './characters.module.css'

export default function Characters() {

    const { data: characters, isFetching } =
        useFetch("https://rickandmortyapi.com/api/character")

    return (
        <div className={styles.container}>
            {
                characters?.map(character => {
                    return (
                        <Card
                            img={character.image}
                            name={character.name}
                            specie={character.species}
                            key={character.id}
                        />
                    )
                })}
        </div>

    )
}