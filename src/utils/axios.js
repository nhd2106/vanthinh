import axios from 'axios';

export default axios.create({
    baseURL: 'https://duoc-task-manager.herokuapp.com/'
})