import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterMovies/slice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 justify-center mt-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </div>
  );
};
export default SearchBar;
