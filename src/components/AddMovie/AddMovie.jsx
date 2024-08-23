import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovieThunk } from "../../redux/movies/operations";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("poster", data.poster[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("genres", data.genres);
    formData.append("rating", data.rating);
    formData.append("director", data.director);
    formData.append("release_date", format(data.release_date, "dd-MM-yyyy"));
    formData.append("actors", data.actors);

    dispatch(addMovieThunk(formData));

    reset();
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl">Add movie</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
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
            className="textarea textarea-bordered h-24 w-[300px]"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </label>
        <button className="btn btn-primary mt-5 w-[100%]">add</button>
      </form>
    </div>
  );
};
export default AddMovie;
