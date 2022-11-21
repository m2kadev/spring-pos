import axios from "axios"
import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url, config) => {
    const [datas, setDatas] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState({})
    
    const getDatas = async () => {
        try {
            setLoading(true)
            const response = (await axios.get(url, config)).data
            setDatas(response)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDatas()
        console.log('rendered')
    }, [url, refetch])
    
    return { datas, error, loading, getDatas, setDatas, setRefetch }
    
}