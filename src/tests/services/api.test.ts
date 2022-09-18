import "@testing-library/react";

import { getPopularMovies } from "../../services/api";

describe("GetPopularMovies Service", () => {
  let oFetch: typeof global.fetch;
  beforeAll(() => {
    oFetch = global.fetch;
  });
  afterAll(() => {
    global.fetch = oFetch;
  });
  test("Should get movies when getPopularMovies method is called", async () => {
    const popularMovie = {
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "vote_average": 8.7
    }

    const mockFetch = Promise.resolve({ json: () => Promise.resolve([popularMovie]) });

    global.fetch = jest.fn().mockImplementation(() => mockFetch);
    const movies = await getPopularMovies();

    expect(global.fetch).toHaveBeenCalled();
    expect(movies).toStrictEqual([popularMovie]);
  });
});
