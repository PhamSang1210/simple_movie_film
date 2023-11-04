import MovieList from "../components/movie/MovieList";

export const MoviePage = () => {
    return (
        <div className="py-10">
            <MovieList type="latest" />
        </div>
    );
};
