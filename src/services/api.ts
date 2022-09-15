const BASE_URL = 'https://api.themoviedb.org/3/movie'

export type ITag = {
    id: number;
    name: string;
}

type IGetGenresAndRuntimeByMovieIdResponse = {
    genres: ITag[];
    runtime: number;
}

export const getGenresAndRuntimeByMovieId = async (movieId: number): Promise<IGetGenresAndRuntimeByMovieIdResponse> => {
    const response = await fetch(`${BASE_URL}/${movieId}?api_key=45d7491a8784c512d9adb5b759990897&language=en-US`)
    return response.json()
}