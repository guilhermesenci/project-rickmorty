import { useState, useEffect } from 'react'

export default function useCharacter() {
    const [data, setData] = useState([] || null)
    const [page, setPage] = useState()
    const [isFetching, setIsFetching] = useState(true)

    function fetchApi(url) {
        fetch(url ? url : "https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.json()
            })
            .then((resp) => {
                const arrConcatenated = data.concat(resp?.results)
                setData(arrConcatenated)
                setPage(resp?.info?.next)
            })
    }

    useEffect(() => {
            fetchApi("https://rickandmortyapi.com/api/character")
    }, [])

    useEffect(() => {
        if (page) {
            fetchApi(page)
        } else if (page === null) {
            setIsFetching(false)
        }
    }, [page])

    return { data, isFetching }

}
