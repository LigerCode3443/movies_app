import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterMovies/slice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(setFilter(data));
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5 justify-center mt-5"
    >
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        {...register("value")}
      />
      <button className="btn btn-primary w-[150px]">Search</button>
    </form>
  );
};
export default SearchBar;
