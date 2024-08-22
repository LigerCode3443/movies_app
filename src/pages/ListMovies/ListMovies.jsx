import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import { selectMovies } from "../../redux/movies/selectors";
import SearchBar from "../../components/SearrchBar/SearchBar";
import { selectFilteredMemo } from "../../redux/movies/slice";

const ListMovies = () => {
  const movies = useSelector(selectMovies);
  const filterMovie = useSelector(selectFilteredMemo);

  console.log(filterMovie);
  return (
    <>
      <SearchBar />
      <ul className="flex flex-wrap gap-5 mt-5 justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </ul>
    </>
  );
};
export default ListMovies;
