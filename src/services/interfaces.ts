export interface ITag {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: string;
}

export interface IMovieDetail {
  original_title: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  genres: ITag[];
  runtime: number;
  original_language: string;
}

export interface ICast {
  id: number;
  profile_path: string;
  name: string;
}

export interface ITrailer {
  key: string;
  type: string;
}

export interface IGetMoviesResponse {
  results: IMovie[];
}

export interface IGetGenresAndRuntimeByMovieIdResponse {
  genres: ITag[];
  runtime: number;
}

export interface IGetCastByMovieIdResponse {
  cast: ICast[];
}

export interface IGetDetailsByMovieIdResponse extends IMovieDetail {}

export interface IGetTrailerByMovieIdResponse {
  results: ITrailer[];
}
