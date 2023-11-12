import { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
// import MovieList from "~/components/movie/MovieList";
function HomePage() {
    return (
        <Fragment>
            {/*//! Movies list */}
            <section className="movies-layout page-container pb-10">
                <div>
                    <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                        now playing
                    </h2>
                    <MovieList />
                </div>
            </section>

            {/*//! top reated */}
            <section className="movies-layout page-container pb-10">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Top rated
                </h2>

                <div className="movie-list grid grid-cols-4 gap-10">
                    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
                        <img
                            src="https://cdn.vox-cdn.com/thumbor/qhzGnIjuTspg-kOKDqEmRyuZl48=/0x376:1688x1220/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />

                        <h3 className="text-xl font-bold mb-3">
                            Spidermen: Homecoming
                        </h3>

                        <div
                            className="flex justify-between text-sm
                            opacity-50 items-center"
                        >
                            <span>2017</span>
                            <span>7.4</span>
                        </div>

                        <button className="w-full mt-1 px-6 py-3 rounded-lg bg-primary">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>

            {/*//! Trending */}
            <section className="movies-layout page-container pb-10">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Trending
                </h2>

                <div className="movie-list grid grid-cols-4 gap-10">
                    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
                        <img
                            src="https://cdn.vox-cdn.com/thumbor/qhzGnIjuTspg-kOKDqEmRyuZl48=/0x376:1688x1220/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />

                        <h3 className="text-xl font-bold mb-3">
                            Spidermen: Homecoming
                        </h3>

                        <div
                            className="flex justify-between text-sm
                            opacity-50 items-center"
                        >
                            <span>2017</span>
                            <span>7.4</span>
                        </div>

                        <button className="w-full mt-1 px-6 py-3 rounded-lg bg-primary">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default HomePage;
