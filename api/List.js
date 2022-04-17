import axios from 'axios'
const baseUrl = 'https://mindicador.cl/api';


export default axios.create({
    baseURL: baseUrl,
    timeout: 2500,

  });