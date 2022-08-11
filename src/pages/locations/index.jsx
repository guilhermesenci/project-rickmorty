import { useState, useEffect } from 'react'
import useFetch from '.././../hooks/useFetch'
import { useNavigate } from "react-router-dom"

import styles from './locations.module.css'

import Header from '../../components/header'
import logo from '../../assets/rickNMortyLocations.svg'
import InputText from '../../components/inputText'
import InfoCard from '../../components/infoCard'
import SelectMenu from '../../components/selectMenu'

export default function Locations() {
    const [search, setSearch] = useState([])
    const [locationsList, setLocationList] = useState([])
    const [selectByType, setSelectByType] = useState([])
    const [selectByDimension, setSelectByDimension] = useState([])
    const navigate = useNavigate()

    const { data: locations } =
        useFetch("https://rickandmortyapi.com/api/location")

    useEffect(() => {
        if (locations.results) {
            setLocationList(locations.results)
            console.log(locationsList)
        }
    }, [locations])


    useEffect(() => {
        const typeOpt = locationsList.map(item => {
            return item.type
        })
        const typeOptions = [... new Set(typeOpt)]
        setSelectByType(typeOptions)

        const dimensionOpt = locationsList.map(item => {
            return item.dimension
        })
        const dimensionOptions = [... new Set(dimensionOpt)]
        setSelectByDimension(dimensionOptions)

    }, [locations])

    const locationsFilter = search.length > 0
        ? locationsList.filter(byName => byName.name.toLowerCase().includes(search))
        : []

    const typeFilter = search.length > 0
        ? locationsList.filter(byType => byType.type.includes(search))
        : []

    const dimensionFilter = search.length > 0
        ? locationsList.filter(byDimension => byDimension.dimension.includes(search))
        : []

    const filterList = [...locationsFilter, ...typeFilter, ...dimensionFilter]

    function goToLocation(item) {
        navigate(`/locations/${item.name}`)
    }

    return (
        <div className={styles.container}>
            <Header logoImage={logo} />
            <div className={styles.searchArea}>
                <InputText
                    placeHolder="Filter by name..."
                    name={search}
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    size={326}
                />
                <SelectMenu
                    name="Type"
                    options={selectByType}
                    placeholder="Type"
                    onChange={e => setSearch(e.target.value)}
                    value={selectByType}
                />
                <SelectMenu
                    name="Dimension"
                    options={selectByDimension}
                    placeholder="Dimension"
                    onChange={e => setSearch(e.target.value)}
                    value={selectByDimension}
                />
            </div>
            <div className={styles.episodeList}>
                {
                    search.length > 0 ?
                        filterList?.map((location, index) => {
                            return (
                                <div className={styles.linkStyle} key={index}>
                                    <InfoCard
                                        title={location.name}
                                        subTitle={location.type}
                                        onClick={() => goToLocation(location)}
                                    />
                                </div>
                            )
                        })
                        :
                        locationsList.map((location, index) => {
                            return (
                                <div className={styles.linkStyle} key={index}>
                                    <InfoCard
                                        title={location.name}
                                        subTitle={location.type}
                                        onClick={() => goToLocation(location)}
                                    />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}