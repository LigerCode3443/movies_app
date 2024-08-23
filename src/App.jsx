import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getMoviesThunk } from "./redux/movies/operations";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import ListMovies from "./pages/ListMovies/ListMovies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, [dispatch]);
  return (
    <div className="w-[1280px] px-5 mx-[auto] my-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ListMovies />} />
          <Route path="add/movie" element={<Home />} />
          <Route path="/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
