export const IMG_URL = 'https://image.tmdb.org/t/p/original'
const BASE_URL = 'https://api.themoviedb.org/3/movie'
const API_KEY = '45d7491a8784c512d9adb5b759990897'

export type ITag = {
    id: number;
    name: string;
}

export type IMovie = {
    id: number,
    original_title: string;
    poster_path: string;
    vote_average: string;
}

export type IMovieDetail = {
    original_title: string;
    overview: string;
    vote_average: number;
    backdrop_path: string;
    genres: ITag[];
    runtime: number;
    original_language: string;
}

export type ICast = {
    id: number;
    profile_path: string;
    name: string;
}

type IGetMoviesResponse = {
    results: IMovie[];
}

type IGetGenresAndRuntimeByMovieIdResponse = {
    genres: ITag[];
    runtime: number;
}

type IGetCastByMovieIdResponse = {
    cast: ICast[];
}

type IGetDetailsByMovieIdResponse = {
    original_title: string;
    overview: string;
    vote_average: number;
    backdrop_path: string;
    genres: ITag[];
    runtime: number;
    original_language: string;
}

export const getGenresAndRuntimeByMovieId = async (movieId: string | undefined): Promise<IGetGenresAndRuntimeByMovieIdResponse> => {
    const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`)
    return response.json()
}

export const getDetailsByMovieId = async (movieId: string | undefined): Promise<IGetDetailsByMovieIdResponse> => {
    const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`)
    return response.json()
}

export const getCastByMovieId = async (movieId: string | undefined): Promise<IGetCastByMovieIdResponse> => {
    const response = await fetch(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    return response.json()
}

export const getNowPlayingMovies = async (): Promise<IGetMoviesResponse> => {
    const response = await fetch(`${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
    return response.json()
}

export const getPopularMovies = async (): Promise<IGetMoviesResponse> => {
    const response = await fetch(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    return response.json()
}