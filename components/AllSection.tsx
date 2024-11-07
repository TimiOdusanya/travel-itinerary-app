import React from 'react'
import Flights from './flights/Flights';
import Hotels from './hotels/Hotels';
import Activities from './activities/Activities';

const AllSection = () => {
  return (
    <div className="mt-[80px]">
      <div className="">
        <h1 className="font-semibold text-xl text-gray-200 mb-1">Trip Itineraries</h1>
        <h6 className="font-normal text-base text-gray-100">
          Your trip itineraries are placed here
        </h6>
      </div>

      <div className='flex flex-col gap-4'>
        <Flights />
        <Hotels />
        <Activities />
      </div>
    </div>
  );
}

export default AllSection