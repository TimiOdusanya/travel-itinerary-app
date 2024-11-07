
import React from 'react';

const FilterOptions: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <input type="radio" name="filter" value="hotels" className="form-radio text-blue-500" />
        <span>Hotels</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="filter" value="activities" className="form-radio text-blue-500" />
        <span>Activities</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="filter" value="flights" className="form-radio text-blue-500" />
        <span>Flights</span>
      </label>
    </div>
  );
};

export default FilterOptions;
