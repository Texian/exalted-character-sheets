import axios from 'axios';

const endpoint = 'http://localhost:4001/api/v1';

const register = (user) => {
    return axios.post(`${endpoint}/register`, user)
    .then(res => res)
    .catch(err => console.log(`Axios Register error: ${err}`));
}

const login = (user) => {
    return axios.post(`${endpoint}/login`, user)
    .then(res => res)
    .catch(err => console.log(`Axios Login error: ${err}`));
}

export default {
    register,
    login
}