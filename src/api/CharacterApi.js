import axios from "axios";

const endpoint = 'http://localhost:4001/api/v1/characters';

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err => console.log(`Axios Get error: ${err}`));
}

const update = (character) => {
    return axios.put(`${endpoint}/${character._id}`, character)
    .then(res => res)
    .catch(err => console.log(`Axios Put error: ${err}`));
}

const deleteCharacter = (id) => {
    return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err => console.log(`Axios Delete error: ${err}`));
}

export default {
    index,
    update,
    deleteCharacter
}