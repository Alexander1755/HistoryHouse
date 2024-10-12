import axios from 'axios'

 const baseURL = 'http://localhost:3000'

const api = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    responseType: 'json',
    withCredentials: true,
});


export const getBooks = () => api.get('/libros/librote')
export const getDescripcion = (bookId) => api.get(`/libros/libros/descripcion/${bookId}`);  // Interpolando bookId en la URL