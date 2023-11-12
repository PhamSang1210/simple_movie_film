import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=e05b0c0cd596ad7a60adf237a07abf19`,
        fetcher
    );

    useEffect(() => {
        if (data && data.results) setMovies(data.results);
    }, [data]);

    return (
        <Fragment>
            <div className="movie-list">
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                >
                    {movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item} />
                        </SwiperSlide>
                    ))}

                    {}
                </Swiper>
            </div>
        </Fragment>
    );
}

export default MovieList;
