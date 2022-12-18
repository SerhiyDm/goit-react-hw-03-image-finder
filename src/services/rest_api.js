import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30681276-5df088d4e4761da157226470c';

export const fetchPhotos = async ({ searchQuery, currentPage, pageSize }) => {
  const { data } = await axios.get(
    `?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
  );
  return data;
};
