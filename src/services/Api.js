import axios from 'axios'

export const urlApi = 'https://backendalugueldeimoveis.onrender.com';

const Api = axios.create({
    baseURL:'https://backendalugueldeimoveis.onrender.com',
    
})


export default Api;