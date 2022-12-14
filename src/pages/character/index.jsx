import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import InfoText from '../../components/infoText'
import LeftArrow from '../../assets/icon/leftArrow.svg'
import styles from './character.module.css'

export default function character() {
    const [charactersList, setCharactersList] = useState([])
    const [charactersFilter, setCharactersFilter] = useState([])
    const [episodes, setEpisodes] = useState([])

    const navigate = useNavigate()
    const { name } = useParams()
    const { id } = useParams()
    const { data: characters } = useFetch("https://rickandmortyapi.com/api/character")

    useEffect(() => {
        if (characters) {
            setCharactersList(characters)
        }
    }, [characters])

    useEffect(() => {
        if (charactersList) {
            setCharactersFilter(charactersList.filter(item => { if (item.id == id && item.name == name) return item }))
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
            fetchAPI(epList)
        }
    }, [charactersFilter])

    function fetchAPI(value) {
        if (value) {
            fetch(`https://rickandmortyapi.com/api/episode/${value}`)
                .then((response) => {
                    return response.json()
                })
                .then((res) => {
                    setEpisodes(res)
                })
        }
    }

    function goBack() {
        navigate("/characters")
    }

    function goToLocation(item) {
        navigate(`/locations/${item.location.name}`)
    }

    function goToEpisode(value) {
        navigate(`/episodes/${value.name}`)
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.goBackDiv} onClick={() => goBack()}>
                    <img src={LeftArrow} /><span className={styles.goBackButton} >GO BACK</span>
                </div>
                {
                    charactersFilter.map((item, index) => {
                        return (
                            <div key={index}>

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
                                                {episodes.length && episodes.map((item, index) => {
                                                    return (
                                                        <InfoText
                                                            key={index}
                                                            title={item.episode}
                                                            subtitle={item.name}
                                                            otherTitle={item.air_date}
                                                            button={true}
                                                            onClick={() => goToEpisode(item)}
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