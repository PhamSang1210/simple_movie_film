import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { title, vote_average, release_date, poster_path, id } = item;
    const navigate = useNavigate();
    const voteStar = vote_average;
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
                    <div className="flex justify-center items-center gap-0.5">
                        <span>{voteStar.toFixed(1)}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                color="yellow"
                            />
                        </svg>
                    </div>
                </div>

                <button
                    onClick={() => navigate(`/movie/${id}`)}
                    className="mt-auto w-full px-6 py-3 rounded-lg bg-primary"
                >
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
