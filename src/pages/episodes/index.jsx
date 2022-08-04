import { useState } from 'react'
import useFetch from '.././../hooks/useFetch'
import { Link } from "react-router-dom"

import styles from './episodes.module.css'

import Header from '../../components/header'
import logo from '../../assets/rickNMorty.svg'
import InputText from '../../components/inputText'
import InfoCard from '../../components/infoCard'

export default function Episodes() {
    const [search, setSearch] = useState([])

    const { data: episodes } =
        useFetch("https://rickandmortyapi.com/api/episode")

    const episodesList = search.length > 0
        ? episodes.results?.filter(episodesList => episodesList.name.toLowerCase().includes(search))
        : []

    return (
        <div className={styles.container}>
            <Header logoImage={logo} />
            <InputText
                placeHolder="Filter by name or episode (ex. S01 or S01E02)"
                name={search}
                onChange={e => setSearch(e.target.value)}
                value={search}
                size={500}
            />
            <div className={styles.episodeList}>
                {
                    search.length > 0 ?
                    episodesList?.map(episode => {
                            return (
                                <div className={styles.linkStyle} key={episode.id}>
                                    <Link to={`/episodes/${episode.episode}`} className={styles.link}>
                                        <InfoCard
                                            title={episode.name}
                                            subTitle={episode.air_date}
                                            text={episode.episode}
                                        />
                                    </Link>
                                </div>
                            )
                        })
                        :
                        episodes.results?.map(episode => {
                            return (
                                <div className={styles.linkStyle} key={episode.id}>
                                    <Link to={`/episodes/${episode.name}`} className={styles.link}>
                                        <InfoCard
                                            title={episode.name}
                                            subTitle={episode.air_date}
                                            text={episode.episode}
                                        />
                                    </Link>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}