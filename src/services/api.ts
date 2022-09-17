import {
  IGetCastByMovieIdResponse,
  IGetDetailsByMovieIdResponse,
  IGetGenresAndRuntimeByMovieIdResponse,
  IGetMoviesResponse,
  IGetTrailerByMovieIdResponse,
} from "./interfaces";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getGenresAndRuntimeByMovieId = async (
  movieId: string
): Promise<IGetGenresAndRuntimeByMovieIdResponse> => {
  const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`);
  return response.json();
};

export const getDetailsByMovieId = async (
  movieId: string
): Promise<IGetDetailsByMovieIdResponse> => {
  const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`);
  return response.json();
};

export const getCastByMovieId = async (
  movieId: string
): Promise<IGetCastByMovieIdResponse> => {
  const response = await fetch(
    `${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.json();
};

export const getTrailerByMovieId = async (
  movieId: string
): Promise<IGetTrailerByMovieIdResponse> => {
  const response = await fetch(
    `${BASE_URL}/${movieId}/videos?api_key=${API_KEY}`
  );
  return response.json();
};

export const getNowPlayingMovies = async (): Promise<IGetMoviesResponse> => {
  const response = await fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const getPopularMovies = async (): Promise<IGetMoviesResponse> => {
  const response = await fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.json();
};
