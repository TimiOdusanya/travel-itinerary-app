import { useState } from "react";
import FilterOptions from "./FilterOptions";

const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="🔍 Search"
        className="w-[300px] px-4 py-3 border-none rounded-md bg-gray-25 font-extralight text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-300"
        onClick={() => setShowFilters(true)}
      />
      {showFilters && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => setShowFilters(false)}
          >
            &times;
          </button>
          <div className="p-4">
            <FilterOptions />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
