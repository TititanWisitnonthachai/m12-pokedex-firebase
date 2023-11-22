import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/TititanWisitnonthachai/m11-pokedex',  // notice that it doesn't include books
    withCredentials: false,
    headers: {
        Accept: 'application/json',   // what client expect
        'Content-Type': 'application/json' // descriping our request content (none here)
    }
})

export default {
    getPokedex() { 
        return apiClient.get('/pokemon') //  notice that /books will be append to the baseURL
    },
    getPokedex1(id) {
        return apiClient.get('/pokemon/' + id) // we append id to the URL
    } 
}