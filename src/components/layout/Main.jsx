import { Fragment } from "react";
import HeaderFilm from "./Header";
import { Outlet } from "react-router-dom";

function Main() {
    return (
        <Fragment>
            <HeaderFilm></HeaderFilm>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Main;
