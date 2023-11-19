import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'api_key=live_LPnXlQ229NmBimU9x6qQKGhqCLatSsiVqev4wkM3mmEE6D3E7eX9tRUv62ittXkN';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_LPnXlQ229NmBimU9x6qQKGhqCLatSsiVqev4wkM3mmEE6D3E7eX9tRUv62ittXkN';

function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`);
}

function fetchCatByBreed(breedIds) {
  return axios.get(
    `${BASE_URL}images/search?breed_ids=${breedIds}&api_key=${API_KEY}`
  );
}
export { fetchBreeds, fetchCatByBreed };
