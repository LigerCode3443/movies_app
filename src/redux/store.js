import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { movieSlice } from "./movies/slice";
import { filterSlice } from "./filterMovies/slice";

const persistConfig = {
  key: "movies",
  version: 1,
  storage,
  whiteList: ["movies"],
};

const persistedReducer = persistReducer(persistConfig, movieSlice);

export const store = configureStore({
  reducer: {
    movie: persistedReducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
