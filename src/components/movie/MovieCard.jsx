const MovieCard = ({ item }) => {
    const { title, vote_average, release_date, poster_path } = item;
    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />

            <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-bold mb-3">{title}</h3>

                <div
                    className="flex justify-between text-sm
                opacity-50 items-center"
                >
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>

                <button className="mt-auto w-full px-6 py-3 rounded-lg bg-primary">
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
