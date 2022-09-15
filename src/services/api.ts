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

type IGetMoviesResponse = {
    results: IMovie[];
}

type IGetGenresAndRuntimeByMovieIdResponse = {
    genres: ITag[];
    runtime: number;
}

export const getGenresAndRuntimeByMovieId = async (movieId: number): Promise<IGetGenresAndRuntimeByMovieIdResponse> => {
    const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`)
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