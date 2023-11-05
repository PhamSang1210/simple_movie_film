import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
        fetcher
    );
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;
    console.log(movieId);
    console.log("MovieDetailsPage ~ data: ", data);
    return (
        <section className="pb-10">
            <div className="w-full h-[600px] relative page-container mb-20">
                <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                <div
                    className="w-full h-full bg-cover bg-no-repeat rounded-xl"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
                    }}
                ></div>

                <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                    <img
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                    />
                </div>

                <h1 className="text-white text-center text-5xl font-bold mb-10">
                    {title}
                </h1>
                {genres.length > 0 && (
                    <div className="flex justify-center items-center gap-x-10 mb-10  ">
                        {genres.map((item) => (
                            <span
                                className="block py-4 px-6 border-primary border rounded-sm"
                                key={item.id}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-center leading-relaxed max-w-[600px] mx-auto pb-20">
                    {overview}
                </p>
            </div>
        </section>
    );
};

export default MovieDetailsPage;
