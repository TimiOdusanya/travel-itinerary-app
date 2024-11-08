import React from "react";

const FilterOptions = () => {
  return (
    <div className="flex justify-between px-6 py-4 mt-2 text-[15px] font-extralight">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="filter"
          value="hotels"
          className="form-checkbox text-blue-500 w-4 h-4"
        />
        <span>All</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="filter"
          value="hotels"
          className="form-checkbox text-blue-500 w-4 h-4"
        />
        <span>Hotels</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="filter"
          value="activities"
          className="form-checkbox text-blue-500 w-4 h-4"
        />
        <span>Activities</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="filter"
          value="flights"
          className="form-checkbox text-blue-500 w-4 h-4"
        />
        <span>Flights</span>
      </label>
    </div>
  );
};

export default FilterOptions;
