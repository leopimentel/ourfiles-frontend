import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ourfiles.herokuapp.com', 
});

export default api; 