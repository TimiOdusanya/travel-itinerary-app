"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import EmptyStateCard from "../EmptyStateCard";
import { PiRoadHorizonBold } from "react-icons/pi";
import { Activity } from "@/constants/interface";

const Activities = () => {
  const [activities, setActivites] = useState<Activity[]>([]);

  useEffect(() => {
    const addedActivities = JSON.parse(
      localStorage.getItem("addedActivities") || "[]"
    );
    setActivites(addedActivities);
  }, []);

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

      {activities.length > 0 ? (
          activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              cardImage={activity.primaryPhoto?.small}
              cardTitle={activity.name}
              description={activity.shortDescription}
              currency={activity.representativePrice.currency}
              price={activity.representativePrice.chargeAmount}
              averageRatings={
                activity.reviewsStats?.combinedNumericStats?.average
              }
              overallRating={activity.reviewsStats?.combinedNumericStats?.total}
            />
          ))
      ) : (
        <EmptyStateCard
          emptyImage="/images/EmptyActivity.svg"
          emptyLink="/activities"
          emptyButton="Add Activity"
        />
      )}
    </div>
  );
};

export default Activities;
