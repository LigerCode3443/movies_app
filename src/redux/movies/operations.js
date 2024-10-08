import { createAsyncThunk } from "@reduxjs/toolkit";
import { moviesApi } from "../../config/moviesApi";

export const getMoviesThunk = createAsyncThunk(
  "get/movies",
  async (_, thunkApi) => {
    try {
      const { data } = await moviesApi.get("/");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getMovieByIdThunk = createAsyncThunk(
  "get/moviesById",
  async (id, thunkApi) => {
    try {
      const { data } = await moviesApi.get(`/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addMovieThunk = createAsyncThunk(
  "add/movie",
  async (movie, thunkApi) => {
    try {
      const { data } = await moviesApi.post("", movie);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateMovieThunk = createAsyncThunk(
  "update/movie",
  async (movie, thunkApi) => {
    try {
      const { data } = await moviesApi.put(`/${movie.id}`, movie.data);
      thunkApi.dispatch(getMoviesThunk());
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deletedMovieThunk = createAsyncThunk(
  "delete/movie",
  async (id, thunkApi) => {
    try {
      const { data } = await moviesApi.delete(`/${id}`);
      thunkApi.dispatch(getMoviesThunk());
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateMovieFavorite = createAsyncThunk(
  "update/favorite",
  async (movie, thunkApi) => {
    try {
      const { data } = await moviesApi.patch(
        `/${movie.id}/favorite`,
        movie.favorite
      );
      thunkApi.dispatch(getMoviesThunk());
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
