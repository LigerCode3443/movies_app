import { useDispatch } from "react-redux";
import {
  deletedMovieThunk,
  getMovieByIdThunk,
} from "../../redux/movies/operations";
import { NavLink } from "react-router-dom";
import EditMovie from "../EditMovie/EditMovie";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deletedMovieThunk(id));
  };
  return (
    <>
      <li className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={movie.poster} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>release date {movie.release_date}</p>
          <p>rating {movie.rating}</p>

          <div className="card-actions justify-end">
            <NavLink
              to={`/${movie._id}`}
              className="btn btn-primary"
              onClick={() => {
                dispatch(getMovieByIdThunk(movie._id));
              }}
            >
              Details
            </NavLink>
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log(modalIsOpen);
                handleModalOpen();
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleDelete(movie._id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <EditMovie
        movie={movie}
        modalIsOpen={modalIsOpen}
        handleModalClose={handleModalClose}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
};
export default MovieCard;
