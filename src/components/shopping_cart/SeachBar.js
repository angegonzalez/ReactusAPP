import { useState, useEffect } from "react";
import { filterProductsByTitle, setActualPage, fetchProducts, setDataProducts } from "@/features/products/productsSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchInput, setsearchInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setsearchInput(e.target.value);
    if(e.target.value === ""){
        dispatch(setDataProducts([]));
        dispatch(fetchProducts())
    }else{
        dispatch(setActualPage(1));
        dispatch(filterProductsByTitle(e.target.value));
    }
  };
  

  return (
    <div className="mb-5">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={searchInput}
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for a product by title"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
      </div>
    </div>
  );
};

export default SearchBar;
