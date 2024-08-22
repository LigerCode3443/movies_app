import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx("text-black", isActive && "text-white");
};

const Navigation = () => {
  return (
    <header className="px-10 py-5 bg-blue-500">
      <nav>
        <ul className="flex justify-end gap-5 text-2xl font-semibold">
          <li>
            <NavLink to="/" className={buildLinkClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={buildLinkClass}>
              MOVIES
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
