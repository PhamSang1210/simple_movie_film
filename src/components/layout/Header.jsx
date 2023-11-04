import { NavLink } from "react-router-dom";

function HeaderFilm() {
    return (
        <header className="header flex justify-center items-center gap-x-5 text-white mt-10 mb-5">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
                HOME
            </NavLink>
            <NavLink
                to="/movie"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
                MOVIE
            </NavLink>
        </header>
    );
}

export default HeaderFilm;
