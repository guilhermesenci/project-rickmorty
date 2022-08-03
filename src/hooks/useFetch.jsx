import { useState, useEffect } from 'react'

export default function useFecth(url) {
    const [data, setData] = useState([] || null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responsed => {
                setData(responsed.results)
            })

            .finally(() => {
                setIsFetching(false)
            })
    }, [])

    return { data, isFetching }
}