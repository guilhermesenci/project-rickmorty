import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

import Card from '../../components/card'
import LeftArrow from '../../assets/icon/leftArrow.svg'
import styles from './episodeInfo.module.css'

export default function LocationInfo() {
    const [episodeCast, setEpisodeCast] = useState([])
    const [episodeInfos, setEpisodeInfo] = useState([])
    const [characterList, setCharacterList] = useState([])

    const navigate = useNavigate()
    const { episode } = useParams()
    const { data: episodes } = useFetch("https://rickandmortyapi.com/api/episode")

    useEffect(() => {
        if (episodes.results) {
            setEpisodeCast(episodes.results)
        }
    }, [episode])

    useEffect(() => {
        if (episodeCast) {
            setEpisodeInfo(episodeCast.filter(episodeFilter => episodeFilter.name.includes(episode)))
        }
    }, [episodeCast])

    function goBack() {
        navigate("/")
    }

    useEffect(() => {
        if (episodeInfos) {
            let auxVar = "https://rickandmortyapi.com/api/character/"
            let forSlice = auxVar.length
            let castCharacter = episodeInfos.map(item => { return item?.characters })
            let castEpisode = castCharacter?.map(item => {
                return (item.slice(forSlice))
            })
            setCharacterList(castEpisode)
        }
    }, [episodeInfos])

    const { data: character } = useFetch(`https://rickandmortyapi.com/api/character/${characterList}`)

    return (
        <>
            <div className={styles.body}>
                <div className={styles.goBackDiv} onClick={() => goBack()}>
                    <img src={LeftArrow} /><span className={styles.goBackButton} >GO BACK</span>
                </div>
                {episodeInfos.map(item => {
                    return (
                        <div key={item.id}>
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
                                            character.length > 0 &&
                                            character?.map(character => {
                                                return (
                                                    <div className={styles.linkStyle} key={character.id}>
                                                        <Link to={`/character/${character.name}`} className={styles.link}>
                                                            <Card
                                                                img={character.image}
                                                                name={character.name}
                                                                specie={character.species}
                                                            />
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
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