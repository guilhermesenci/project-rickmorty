import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import useCharacter from '.././../hooks/useCharacter'
import Card from '../../components/card'
import LeftArrow from '../../assets/icon/leftArrow.svg'
import styles from './episodeInfo.module.css'

export default function LocationInfo() {
    const [episodeCast, setEpisodeCast] = useState([])
    const [episodeInfos, setEpisodeInfo] = useState([])
    const [cast, setCast] = useState([])
    const navigate = useNavigate()
    const { episode } = useParams()
    const { data: episodes } = useFetch("https://rickandmortyapi.com/api/episode")

    useEffect(() => {
        if (episodes) {
            setEpisodeCast(episodes)
        }
    }, [episodes])

    useEffect(() => {
        if (episodeCast) {
            setEpisodeInfo(episodeCast.filter(episodeFilter => episodeFilter.name.includes(episode)))
        }
    }, [episodeCast])

    useEffect(() => {
        if (episodeInfos) {
            let auxVar = "https://rickandmortyapi.com/api/character/"
            let forSlice = auxVar.length
            let castCharacter = episodeInfos.map(item => { return item?.characters })
            let castEpisode = castCharacter[0]?.map(item => {
                return (item.slice(forSlice))
            })
            fetchApi(castEpisode)
        }
    }, [episodeInfos])

    function fetchApi(value) {
        if (value) {
            fetch(`https://rickandmortyapi.com/api/character/${value}`)
                .then(res => {
                    return res.json()
                })
                .then((response) => {
                    setCast(response)
                })
        }
    }

    function goToCharacter(item) {
        navigate(`/character/${item.name}`)
    }

    function goBack() {
        navigate("/")
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.goBackDiv} onClick={() => goBack()}>
                    <img src={LeftArrow} /><span className={styles.goBackButton} >GO BACK</span>
                </div>
                {episodeInfos.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.headerInformation}>
                                <span className={styles.locationName}>
                                    {item.name}
                                </span>
                                <div className={styles.subContainer}>
                                    <div className={styles.subTitleContainer}>
                                        <span className={styles.subTitle}>
                                            Episode
                                        </span>
                                        <span>
                                            {item.episode}
                                        </span>
                                    </div>

                                    <div className={styles.subTitleContainer}>
                                        <span className={styles.subTitle}>
                                            Date
                                        </span>
                                        <span>
                                            {item.air_date}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.residentsContainer}>
                                    <div className={styles.residentsTitle}>
                                        <span>Cast</span>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.container}>
                                        {
                                            cast.length > 0 &&
                                            cast?.map((character, index) => {
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
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}