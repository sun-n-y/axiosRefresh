import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://randomuser.me',
  headers: {
    Accept: 'application/json',
  },
});

export default authFetch;
