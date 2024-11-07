"use client";
import React, { useEffect, useState } from "react";
import ActivityCard from "@/components/activities/ActivityCard";
import EmptyStateCard from "@/components/EmptyStateCard";
import { PiRoadHorizonBold } from "react-icons/pi";
import { Activity } from "@/constants/interface";
import { searchNewActivities } from "@/app/api/bookingAPI";
import Loader from "@/components/Loader";

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await searchNewActivities();
        setActivities(data);
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

    if (loading) return <Loader />;

    
  return (
    <div className="min-h-screen p-6 pb-20 gap-16 bg-white rounded">
      <div className="mb-8">
        <h1 className="font-semibold text-xl text-gray-200 mb-1">
          Activity Itineraries
        </h1>
        <h6 className="font-normal text-base text-gray-100">
          All activites informations are placed here
        </h6>
      </div>

      <div className="bg-blue-300 p-4 rounded">
        <div className="flex gap-2 items-end mb-8">
          <PiRoadHorizonBold size={22} color={"#fff"} />
          <span className="white-subheading"> Activities</span>
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
            emptyImage={"/images/EmptyActivity.svg"}
            emptyLink={"/activities"}
            emptyButton={"Add Activity"}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
