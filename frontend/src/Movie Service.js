import axios from "axios";


const API_URL = "http://localhost:2222/Movie";

export const insertMovie = (movie) => axios.post(`${API_URL}/createMovie`, movie);
export const getMovies = () => axios.get(`${API_URL}/getAllMovies`);
export const deleteMovieById = (mid) => axios.delete(`${API_URL}/deleteMovie/${mid}`);
export const getMovieById = (mid) => axios.get(`${API_URL}/getMovie/${mid}`);
export const updateMovieById = (mid, movie) => axios.put(`${API_URL}/updateMovie/${mid}`, movie);