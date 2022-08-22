import React, { useState, useEffect } from 'react'
import useCharacter from '.././../hooks/useCharacter'
import { useNavigate } from "react-router-dom"

import styles from './characters.module.css'

import Card from '../../components/card'
import InputText from '../../components/inputText'
import SelectMenu from '../../components/selectMenu'
import Header from '../../components/header'
import Loader from '../../components/loader'

import logo from '../../assets/logo.svg'

export default function Characters() {
    const [search, setSearch] = useState([])
    const [characterList, setCharacterList] = useState([])
    const [selectBySpecies, setSelectBySpecies] = useState([])
    const [selectByGender, setSelectByGender] = useState([])
    const [selectByStatus, setSelectByStatus] = useState([])
    const navigate = useNavigate()

    const { data: characters, isFetching: loading } = useCharacter()

    useEffect(() => {
        if (characters) {
            setCharacterList(characters)
        }
    }, [characters])

    useEffect(() => {
        const speciesOpt = characterList.map(item => {
            return item.species
        })
        const speciesOptions = [... new Set(speciesOpt)]
        setSelectBySpecies(speciesOptions)

        const genderOpt = characterList.map(item => {
            return item.gender
        })
        const genderOptions = [... new Set(genderOpt)]
        setSelectByGender(genderOptions)

        const statusOpt = characterList.map(item => {
            return item.status
        })
        const statusOptions = [... new Set(statusOpt)]
        setSelectByStatus(statusOptions)
    }, [characterList])

    const charactersFilter = search.length > 0
        ? characterList.filter(characterSearched => characterSearched.name.toLowerCase().includes(search))
        : []

    const speciesFilter = search.length > 0
        ? characterList.filter(specieSelected => specieSelected.species.includes(search))
        : []

    const genderFilter = search.length > 0
        ? characterList.filter(genderSelected => genderSelected.gender.includes(search))
        : []

    const statusFilter = search.length > 0
        ? characterList.filter(statusSelected => statusSelected.status.includes(search))
        : []

    const filterList = [...charactersFilter, ...speciesFilter, ...genderFilter, ...statusFilter]

    function goToCharacter(item) {
        navigate(`/character/${item.name}/${item.id}`)
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
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
                                <div className={styles.moreFilters}>
                                    <SelectMenu
                                        name="species"
                                        options={selectBySpecies}
                                        placeholder="Species"
                                        onChange={e => setSearch(e.target.value)}
                                        value={selectBySpecies}
                                    />
                                    <SelectMenu
                                        name="species"
                                        options={selectByGender}
                                        placeholder="Gender"
                                        onChange={e => setSearch(e.target.value)}
                                        value={selectByGender}
                                    />
                                    <SelectMenu
                                        name="Status"
                                        options={selectByStatus}
                                        placeholder="Status"
                                        onChange={e => setSearch(e.target.value)}
                                        value={selectByStatus}
                                    />
                                </div>

                            </div>
                            {
                                search.length > 0 ?
                                    filterList?.map((character, index) => {
                                        return (
                                            <div className={styles.linkStyle} key={index}>
                                                <Card
                                                    img={character.image}
                                                    name={character.name}
                                                    specie={character.species}
                                                    onClick={() => goToCharacter(character)}
                                                />
                                            </div>
                                        )
                                    })
                                    :
                                    characterList?.map((character, index) => {
                                        return (
                                            <div className={styles.linkStyle} key={index}>
                                                <Card
                                                    img={character.image}
                                                    name={character.name}
                                                    specie={character.species}
                                                    key={character.id}
                                                    onClick={() => goToCharacter(character)}
                                                />
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </>
            }
        </>

    )
}