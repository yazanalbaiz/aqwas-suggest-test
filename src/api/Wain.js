import axios from 'axios';

export default axios.create({
    baseURL: `https://wainnakel.com/api/v1`,
    timeout: 60000,
    headers: { 'Access-Control-Allow-Headers': 'Content-Type' }
});