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
    <header className="md:px-10 md:py-5 bg-blue-500 xs:px-4 xs:py-3">
      <nav>
        <ul className="flex md:justify-end gap-5 lg:text-2xl md:font-semibold md:text-lg  xs:text-base xs:gap-2 xs:justify-between">
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
