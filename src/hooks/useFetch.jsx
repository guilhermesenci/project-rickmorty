import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([] || null)
    const [page, setPage] = useState()
    const [isFetching, setIsFetching] = useState(true)

    function fetchApi(url) {
        fetch(url)
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
        fetchApi(url)
    }, [url])

    useEffect(() => {
        if (page) {
            fetchApi(page)
        } else {
            setIsFetching(false)
        }
    }, [page])

    return { data, isFetching }
}
