import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://todo-hbnw.onrender.com'
})