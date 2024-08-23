import { useSelector } from "react-redux";
import { selectOneMovie } from "../../redux/movies/selectors";

const MovieDetails = () => {
  const movie = useSelector(selectOneMovie);

  return (
    <div className="mt-5 xs:flex gap-5 xs:flex-col md:flex-row">
      <img
        src={movie.poster}
        alt={movie.title}
        className="md:w-1/2 xs:w-auto rounded-xl"
      />
      <div className="text-xl flex flex-col gap-[10px]">
        <h2 className="font-bold">{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <p>Genres: {movie.genres}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Director: {movie.director}</p>
        <p>Actor: {movie.actors}</p>
        <p>Description:</p>
        <p> {movie.description}</p>
      </div>
    </div>
  );
};
export default MovieDetails;
