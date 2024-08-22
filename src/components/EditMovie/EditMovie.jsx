import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateMovieThunk } from "../../redux/movies/operations";

import ModalWindow from "../ModalWindow/ModalWindow";
import { useEffect } from "react";

const EditMovie = ({ movie, modalIsOpen, handleIsOpen, handleModalClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: movie,
  });

  useEffect(() => {
    reset(movie);
  }, [reset, movie]);
  const onSubmit = (data) => {
    const movie = {
      title: data.title,
      description: data.description,
      genres: data.genres,
      rating: data.rating,
      director: data.director,
      poster: data.poster,
      release_date: data.release_date,
      actors: data.actors,
    };
    const formData = new FormData();
    formData.append("poster", data.poster[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("genres", data.genres);
    formData.append("rating", data.rating);
    formData.append("director", data.director);
    formData.append("release_date", data.release_date);
    formData.append("actors", data.actors);
    s;

    dispatch(updateMovieThunk({ id: data._id, data: movie }));
    handleModalClose();
  };
  return (
    <ModalWindow modalIsOpen={modalIsOpen} onClose={handleModalClose}>
      <p className="text-center font-bold">Edit movie</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            name="title"
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
            {...register("title")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Director</span>
          </div>
          <input
            name="director"
            type="text"
            placeholder="Director"
            className="input input-bordered w-full max-w-xs"
            {...register("director")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Genres</span>
          </div>
          <input
            name="genres"
            type="text"
            placeholder="Genres"
            className="input input-bordered w-full max-w-xs"
            {...register("genres")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Actors</span>
          </div>
          <input
            name="actors"
            type="text"
            placeholder="Actors"
            className="input input-bordered w-full max-w-xs"
            {...register("actors")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Rating</span>
          </div>
          <input
            name="rating"
            type="text"
            placeholder="Rating"
            className="input input-bordered w-full max-w-xs"
            {...register("rating")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Poster</span>
          </div>

          <input
            name="poster"
            type="file"
            className="file-input file-input-bordered file-input-xs w-full max-w-xs"
            {...register("poster")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Release date</span>
          </div>
          <Controller
            name="release_date"
            control={control}
            render={({ field }) => (
              <DatePicker
                showIcon
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                {...field}
              />
            )}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            name="description"
            className="textarea textarea-bordered h-24 w-[300px]"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </label>
        <div className="flex gap-5 flex-col mt-5 items-center">
          <button className="btn btn-primary w-[100%]">Edit</button>
          <button
            className="btn btn-primary w-[150px]"
            onClick={handleModalClose}
          >
            close modal
          </button>
        </div>
      </form>
    </ModalWindow>
  );
};
export default EditMovie;
