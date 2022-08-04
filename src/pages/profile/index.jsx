import React, { useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'

import useFetch from '.././../hooks/useFetch'
import InfoText from '../../components/infoText'

import styles from './profile.module.css'

export default function Profile() {
    const navigate = useNavigate()
    const { name } = useParams()
    const { data: characters } =
        useFetch("https://rickandmortyapi.com/api/character")

    const charactersFilter = characters.filter(characterSearched => characterSearched.name.includes(name))

    useEffect(() => { console.log(charactersFilter) }, [charactersFilter])

    function goBack() {
        navigate("/characters")
    }

    return (
        <>
            <div>{
                charactersFilter.map(item => {
                    return (
                        <div key={item.name} className={styles.container}>
                            <div>
                                <button type="button" onClick={() => goBack()}>GO BACK</button>
                            </div>
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
                                        subtitle={item.type}
                                    />
                                    <InfoText
                                        title="Location"
                                        subtitle={item.location.name}
                                    />
                                </div>
                                <div>
                                    <p className={styles.title}>Episodes</p>
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