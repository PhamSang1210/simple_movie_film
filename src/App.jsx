import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./pages/Homepage";
import { Banner } from "./components/banner/Banner";
import { MoviePage } from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route
                        path="/"
                        element={
                            <>
                                <Banner />
                                <HomePage />
                            </>
                        }
                    ></Route>
                    <Route path="/movie" element={<MoviePage />} />
                    <Route
                        path="/movie/:movieId"
                        element={<MovieDetailsPage />}
                    />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
