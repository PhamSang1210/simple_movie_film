import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./pages/Homepage";
import { Banner } from "./components/banner/Banner";
import { MoviePage } from "./pages/MoviePage";
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
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
