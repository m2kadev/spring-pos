import { useFetch } from "./useFetch"
import axios from "axios"

export const usePost = (url, config) => {

    const { getCustomers } = useFetch(url, config)

    const postData = async (customer) => {
        try {
            const response = await axios.post(url, customer, config)
            getCustomers()
            return response
        } catch (error) {
            console.log(error)
        }
    }

    return { postData }
}

