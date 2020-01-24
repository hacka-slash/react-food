import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zvdujbN1DmEh3qtRwpGZDPvFIhzthbrpxj4Uyi9vUoYuQHj2VVz15S-1pj8CtuQ0syRVxA_PBDYRWC8-7_iQjNLfjfJhL_7HZ1c9bQkUQmY3Vxg7zL7ao8gKqNojXnYx'
    }
});
