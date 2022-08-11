import { useState, useEffect } from 'react'

export default function useFecth(url) {
    const [data, setData] = useState([] || null)
    const [page, setPage] = useState()
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responsed => {
                setData(responsed)
                setPage(responsed?.info?.next)
            })
            .finally(() => {
                setIsFetching(false)
            })
    }, [url])

    useEffect(() => {
        if (page) {
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(responsed => {
                    setData([...data, responsed])
                    setPage(responsed?.info?.next)
                })
                .finally(() => {
                    setIsFetching(false)
                })
        }
    }, [page])

    return { data, isFetching }
}
