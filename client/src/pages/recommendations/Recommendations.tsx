// import { useState, useEffect } from "react";

// import { Restaurant } from "../../types";
import RestaurantCard from "../../components/restaurant-card/RestaurantCard";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import { Restaurant } from "../../types";

export default function Recommendations({ userLoc }) {
  const url = import.meta.env.VITE_RECOM;
  const [restaurants, isError, isLoading] = useFetchRestaurants(url, userLoc);

  if (isError) return <h1>Something went wrong.</h1>;
  if (isLoading) return <p>Loading...</p>;
  // console.log("restaurant state:", restaurants);

  return (
    <section>
      <h1 className="page-title">Recommended Restaurants Near You</h1>
      <div className="recommendation-list">
        {restaurants?.map((rest: Restaurant) => (
          <RestaurantCard key={rest.name} restaurant={rest} />
        ))}
      </div>
    </section>
  );
}
