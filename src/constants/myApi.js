import axios from 'axios';

const BASE_URL = 'https://flask-todo-xlash.herokuapp.com'

const myApi = axios.create({
    baseURL: BASE_URL,
});

myApi.defaults.headers.post['Content-Type'] = 'application/json';

export default myApi;