import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

export const MoviePage = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
        fetcher
    );
    const movies = data?.results || [];
    console.log(movies.map((x) => console.log(x)));

    return (
        //! input
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1" dir="ltr">
                    <input
                        type="text"
                        className="w-full bg-slate-800 text-white p-4 border-none border-transparent outline-none rounded-s-xl caret-red-900 caret-bar"
                        placeholder="Input here search..."
                    />
                </div>

                <button className="p-4 bg-primary rounded-s-xl" dir="rtl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-4 gap-10">
                {movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};
