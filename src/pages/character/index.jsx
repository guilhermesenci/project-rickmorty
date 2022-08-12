import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import InfoText from '../../components/infoText'
import LeftArrow from '../../assets/icon/leftArrow.svg'
import styles from './character.module.css'

export default function character() {
    const [charactersList, setCharactersList] = useState([])
    const [charactersFilter, setCharactersFilter] = useState([])
    const [episodesList, setEpisodesList] = useState([])

    const navigate = useNavigate()
    const { name } = useParams()
    const { data: characters } = useFetch("https://rickandmortyapi.com/api/character")

    useEffect(() => {
        if (characters) {
            setCharactersList(characters)
        }
    }, [characters])

    useEffect(() => {
        if (charactersList) {
            setCharactersFilter(charactersList.filter(characterSearched => characterSearched.name.includes(name)))
        }
    }, [charactersList])

    useEffect(() => {
        if (charactersFilter) {
            let auxVar = "https://rickandmortyapi.com/api/episode/"
            let forSlice = auxVar.length
            let auxEpList = charactersFilter.map(item => { return item?.episode })
            let epList = auxEpList[0]?.map(item => {
                return (item.slice(forSlice))
            })
            setEpisodesList(epList)
        }
    }, [charactersFilter])

    const { data: episodes } = useFetch(`https://rickandmortyapi.com/api/episode/${episodesList}`)

    function goBack() {
        navigate("/characters")
    }

    function goToLocation(item) {
        navigate(`/locations/${item.location.name}`)
    }

    return (
        <>
            <div className={styles.body}>{
                charactersFilter.map(item => {
                    return (
                        <div key={item.name}>
                            <div className={styles.goBackDiv} onClick={() => goBack()}>
                                <img src={LeftArrow} /><span className={styles.goBackButton} >GO BACK</span>
                            </div>
                            <div className={styles.container}>
                                <img src={item.image} className={styles.profilePicture} />
                                <span className={styles.name}>{item.name}</span>
                                <div className={styles.infoArea}>
                                    <div>
                                        <p className={styles.title}>Informations</p>
                                        <InfoText
                                            title="Gender"
                                            subtitle={item.gender}
                                        />
                                        <InfoText
                                            title="Status"
                                            subtitle={item.status}
                                        />
                                        <InfoText
                                            title="Specie"
                                            subtitle={item.species}
                                        />
                                        <InfoText
                                            title="Origin"
                                            subtitle={item.origin.name}
                                        />
                                        <InfoText
                                            title="Type"
                                            subtitle={item.type ? item.type : "Unknown"}
                                        />
                                        <InfoText
                                            title="Location"
                                            subtitle={item.location.name}
                                            button={true}
                                            onClick={() => goToLocation(item)}
                                        />
                                    </div>
                                    <div>
                                        <p className={styles.title}>Episodes</p>
                                        <div className={styles.scroll}>
                                            {episodes.length > 0 && episodes.map(item => {
                                                return (
                                                    <InfoText
                                                        key={item.id}
                                                        title={item.episode}
                                                        subtitle={item.name}
                                                        otherTitle={item.air_date}
                                                        button={true}
                                                        onClick={() => goToLocation(item)}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}