import Link from "next/link";
import React from "react";
import ActivityCard from "./ActivityCard";
import EmptyStateCard from "../EmptyStateCard";
import { PiRoadHorizonBold } from "react-icons/pi";

const Activities = () => {
  const flightsData = 0;

  return (
    <div className="bg-blue-300 p-4 rounded">
      <div className="flexBetween">
        <div className="flex gap-2 items-end">
          <PiRoadHorizonBold size={22} color={"#fff"} />
          <span className="white-subheading"> Activities</span>
        </div>
        <Link href={"/activities"}>
          <button className="w-[153px] h-[46px] rounded-md px-6 py-3 text-center font-medium bg-white text-blue-300 text-xs">
            Add Activities
          </button>
        </Link>
      </div>

      {flightsData > 0 ? (
        // <ActivityCard />
        <></>
      ) : (
        <EmptyStateCard
          emptyImage={"/images/EmptyActivity.svg"}
          emptyLink={"/activities"}
          emptyButton={"Add Activity"}
        />
      )}
    </div>
  );
};

export default Activities;
