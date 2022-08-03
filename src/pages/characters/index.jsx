import React, { useState, useEffect } from 'react'
import useFetch from '.././../hooks/useFetch'
import Card from '../../components/card'

import styles from './characters.module.css'

import InputText from '../../components/inputText'
import SelectMenu from '../../components/selectMenu'
import Header from '../../components/header'

import logo from '../../assets/logo.svg'

export default function Characters() {
    const [search, setSearch] = useState([])
    const [characterList, setCharacterList] = useState([])

    const { data: characters } =
        useFetch("https://rickandmortyapi.com/api/character")

    useEffect(() => {
        setCharacterList(characters)
    }, [characters])

    const charactersFilter = search.length > 0
        ? characterList.filter(characterSearched => characterSearched.name.toLowerCase().includes(search))
        : []

    return (
        <>
            <div className={styles.container}>
                <Header logoImage={logo} />
                <div className={styles.searchArea}>
                    <InputText
                        placeHolder="Filter by name..."
                        name={search}
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                    <SelectMenu>
                    </SelectMenu>
                    <SelectMenu />
                    <SelectMenu />
                </div>
            </div>
            <div>
                <div className={styles.container}>
                    {
                        search.length > 0 ?
                            charactersFilter?.map(character => {
                                return (
                                    <Card
                                        img={character.image}
                                        name={character.name}
                                        specie={character.species}
                                        key={character.id}
                                    />
                                )
                            })
                            :
                            characterList?.map(character => {
                                return (
                                    <Card
                                        img={character.image}
                                        name={character.name}
                                        specie={character.species}
                                        key={character.id}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </>

    )
}