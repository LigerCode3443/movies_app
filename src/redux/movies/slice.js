import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addMovieThunk,
  deletedMovieThunk,
  getMovieByIdThunk,
  getMoviesThunk,
  updateMovieThunk,
} from "./operations";
import { selectMovies } from "./selectors";
import { selectFilter } from "../filterMovies/selectors";

const initialState = {
  movies: [],
  movie: null,
  value: null,
};

const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesThunk.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(getMovieByIdThunk.fulfilled, (state, action) => {
        state.movie = action.payload;
      })
      .addCase(addMovieThunk.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(updateMovieThunk.fulfilled, (state, action) => {
        state.movies = state.movies.map((movie) =>
          movie._id === action.payload._id
            ? { ...movie, ...action.payload }
            : movie
        );
      })
      .addCase(deletedMovieThunk.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie._id !== action.payload
        );
      });
  },
});

export const selectFilteredMemo = createSelector(
  [selectMovies, selectFilter],
  (movies, value) => {
    return movies.filter((movie) => {
      return movie?.title.toLowerCase().includes(value?.toLowerCase());
    });
  }
);

export const movieSlice = slice.reducer;
