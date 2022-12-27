import axios from "axios"

const getApi = (param) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${param}`)
}

export {getApi}