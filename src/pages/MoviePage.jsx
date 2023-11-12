import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;

export const MoviePage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [filter, setFilter] = useState("");
    const [nextPage, setNextPage] = useState(1);

    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
    );

    const filterDebounce = useDebounce(filter, 500);
    const { data, err } = useSWR(url, fetcher);
    console.log("data :", data);

    const handleSearchFilm = (e) => {
        let trimData = e.target.value.split(/\s+/).filter(Boolean).join(" ");
        console.log(trimData);
        setFilter(trimData);
    };
    // neu chua co data va khong co loi
    const loading = !data && !err;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
            );
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClickButton = () => {
        setUrl(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
        );
    };
    useEffect(() => {
        if (filterDebounce) {
            handleKeyPress || handleClickButton;

            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
            );
        } else {
            setUrl(
                `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
            );
        }
    }, [filterDebounce, handleClickButton, handleKeyPress, nextPage]);

    const movies = data?.results || [];

    // Pagenation
    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    // End page

    return (
        //! input
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1" dir="ltr">
                    <input
                        onChange={handleSearchFilm}
                        onKeyPress={handleKeyPress}
                        type="text"
                        className="w-full bg-slate-800 text-white p-4 border-none border-transparent outline-none rounded-s-xl caret-red-900 caret-bar"
                        placeholder="Input here search..."
                    />
                </div>

                <button
                    onClick={handleClickButton}
                    className="p-4 hover:bg-[#ccc] bg-primary rounded-s-xl cursor-pointer"
                    dir="rtl"
                    data-title="Tìm Kiếm"
                >
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
            {loading && (
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent  mx-auto animate-spin"></div>
            )}
            <div className="grid grid-cols-4 gap-10">
                {!loading &&
                    movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item} />
                    ))}
            </div>

            <div className="mt-10 flex justify-center items-center">
                <ReactPaginate
                    className="pagenation"
                    breakLabel="..."
                    previousLabel={
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
                                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                            />
                        </svg>
                    }
                    nextLabel={
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
                                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            </div>

            {/* <div className="flex justify-center items-center mt-10 gap-5 hidden">
                <span onClick={() => setNextPage(nextPage - 1)}>
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </span>

                {new Array(5).fill(0).map((item, index) => (
                    <span
                        onClick={() => setNextPage(index + 1)}
                        key={index}
                        className="bg-white leading-none inline-block text-slate-900 px-4 py-2 rounded"
                    >
                        {index + 1}
                    </span>
                ))}

                <span onClick={() => setNextPage(nextPage + 1)}>
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
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </div> */}
        </div>
    );
};
