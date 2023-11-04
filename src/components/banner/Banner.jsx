import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";

function BannerItem({ item }) {
    const { title, backdrop_path } = item;
    console.log(title, backdrop_path);
    return (
        <div className="w-full h-ful relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt=""
                className="flex rounded-xl w-full h-full object-contain"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-3">{title}</h2>
                <div className="flex items-center gap-3 mb-8">
                    {/* Items 1 */}
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    {/* Items 2 */}
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    {/* Items 3*/}
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                </div>
                <button className="px-6 py-3 rounded-lg bg-primary">
                    Watch Now
                </button>
            </div>
        </div>
    );
}

export const Banner = () => {
    const { data } = useSWR(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e05b0c0cd596ad7a60adf237a07abf19",
        fetcher
    );

    const banners = data?.results || [];

    return (
        <section className="banner h-[500px page-container mb-20 overflow-hidden">
            <Swiper grabCursor={"true"} slidesPerView={"auto"}>
                {banners.length > 0 &&
                    banners.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};
