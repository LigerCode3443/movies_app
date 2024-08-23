import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectMovies } from "../../redux/movies/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx("text-black", isActive && "text-white");
};

const Navigation = () => {
  const movies = useSelector(selectMovies);

  const favorite = movies.filter((movie) => movie.favorite === true).length;

  return (
    <header className="px-10 py-5 bg-blue-500">
      <nav>
        <ul className="flex justify-end gap-5 text-2xl font-semibold">
          <li className="text-black">
            {favorite !== 0 ? (
              <p>
                FAVORITE{" "}
                <span className="px-2 py-[2px] bg-white rounded-[50%]">
                  {favorite}
                </span>
              </p>
            ) : (
              ""
            )}
          </li>
          <li>
            <NavLink to="/add/movie" className={buildLinkClass}>
              ADD MOVIE
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              MOVIES
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
