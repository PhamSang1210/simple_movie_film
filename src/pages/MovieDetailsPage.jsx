import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { Fragment } from "react";
const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
        fetcher
    );
    if (error) console.log(error);
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

                <p className="text-center text-2xl leading-relaxed max-w-[600px] mx-auto pb-20">
                    {overview}
                </p>
                <MovieVideos />

                <MovieCredits />
            </div>
        </section>
    );
};

function MovieCredits() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
        fetcher
    );
    if (error) return;
    if (!data) return null;
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;

    console.log("Casts: ", cast);
    return (
        <Fragment>
            <h2 className="text-center mb-10">Casts</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 6).map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-center flex-col items-center cast_item mb-4"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                            alt=""
                            className="w-[350px] h-[350px] object-cover rounded-lg mb-3"
                        />
                        <h2 className="text-center">{item.name}</h2>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

function MovieVideos() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
        fetcher
    );
    if (error) return;
    if (!data) return null;
    console.log("Video: ", data);
    const { results } = data;

    return (
        <div className="mb-10">
            {results.slice(0, 5).map((item) => (
                <div key={item.id} className="flex flex-col gap-5 items-center">
                    {console.log(item.key)}
                    <div className="mb-2">
                        <iframe
                            width="864"
                            height="486"
                            src={`https://www.youtube.com/embed/${item.key}`}
                            title="My Universal Story: Emily Poulliard | Five Nights At Freddy&#39;s"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieDetailsPage;
