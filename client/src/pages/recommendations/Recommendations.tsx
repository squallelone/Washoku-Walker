import { useState, useEffect } from "react";

import { Restaurant } from "../../types";
import RestaurantCard from "../../components/restaurant-card/RestaurantCard";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";

export default function Recommendations() {
  // const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const url = import.meta.env.VITE_RECOM;
  const [restaurants, isError, isLoading] = useFetchRestaurants(url);

  // useEffect(() => {
  //   getRestaurants();
  // }, []);

  // async function getRestaurants() {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setRestaurants(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setIsError(true);
  //   }
  // }

  if (isError) return <h1>Something went wrong.</h1>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h1 className="page-title">Recommended Restaurants Near You</h1>
      <div className="recommendation-list">
        {restaurants?.map((rest) => (
          <RestaurantCard key={rest.name} restaurant={rest} />
        ))}
      </div>
    </section>
  );
}
