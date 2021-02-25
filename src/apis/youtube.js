import axios from 'axios';

const KEY = 'AIzaSyAWHkML84JAvxTeZ43U0SRrH6WkdHQCxn4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
})