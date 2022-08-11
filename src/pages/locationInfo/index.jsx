import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

import Card from '../../components/card'
import LeftArrow from '../../assets/icon/leftArrow.svg'
import styles from './locationInfo.module.css'

export default function LocationInfo() {
    const [locationsList, setLocationsList] = useState([])
    const [locationFilter, setLocationFilter] = useState([])
    const [characterList, setCharacterList] = useState([])

    const navigate = useNavigate()
    const { location } = useParams()
    const { data: locations } = useFetch("https://rickandmortyapi.com/api/location")

    useEffect(() => {
        if (locations.results) {
            setLocationsList(locations.results)
        }
    }, [locations])

    useEffect(() => {
        if (locationsList) {
            setLocationFilter(locationsList.filter(locationsFilter => locationsFilter.name.includes(location)))
        }
    }, [locationsList])

    function goBack() {
        navigate("/")
    }

    useEffect(() => {
        if (locationFilter) {
            let auxVar = "https://rickandmortyapi.com/api/character/"
            let forSlice = auxVar.length
            let peopleLivingHere = locationFilter.map(item => { return item?.residents })
            let livingHere = peopleLivingHere?.map(item => {
                return (item.slice(forSlice))
            })
            setCharacterList(livingHere)
        }
    }, [locationFilter])

    const { data: character } = useFetch(`https://rickandmortyapi.com/api/character/${characterList}`)

    function goToCharacter(item) {
        navigate(`/character/${item.name}`)
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.goBackDiv} onClick={() => goBack()}>
                    <img src={LeftArrow} /><span className={styles.goBackButton} >GO BACK</span>
                </div>
                {locationFilter.map(item => {
                    return (
                        <div key={item.id}>
                            <div className={styles.headerInformation}>
                                <span className={styles.locationName}>{item.name}</span>
                                <div className={styles.subContainer}>
                                    <div className={styles.subTitleContainer}>
                                        <span className={styles.subTitle}>Type</span>
                                        <span>{item.type}</span>
                                    </div>

                                    <div className={styles.subTitleContainer}>
                                        <span className={styles.subTitle}>Dimnesion</span>
                                        <span>{item.dimension}</span>
                                    </div>
                                </div>
                                <div className={styles.residentsContainer}>
                                    <div className={styles.residentsTitle}>
                                        <span>Residents</span>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.container}>
                                        {
                                            character.length > 0 &&
                                            character?.map(character => {
                                                return (
                                                    <div className={styles.linkStyle} key={character.id}>
                                                        <Card
                                                            img={character.image}
                                                            name={character.name}
                                                            specie={character.species}
                                                            onclick={() => goToCharacter(character)}
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
                })
                }
            </div>
        </>
    )
}