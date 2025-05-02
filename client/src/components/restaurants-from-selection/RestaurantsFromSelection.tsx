import { useState, useEffect } from "react";

import { Restaurant } from "../../types";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import RestaurantCard from "../restaurant-card/RestaurantCard";

interface SelectionProps {
  chosenCuisine: string;
  chosenWard: string;
}

export default function RestaurantsFromSelection({
  chosenCuisine,
  chosenWard,
}: SelectionProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = import.meta.env.VITE_BY_DISH_AREA;

  useEffect(() => {
    getRestaurants();
  }, [chosenCuisine, chosenWard]);

  async function getRestaurants() {
    try {
      const response = await fetch(
        `${url}?dish=${chosenCuisine || "pizza"}&area=${chosenWard}`
      );
      const data = await response.json();
      setRestaurants(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  }

  if (isError) console.log("Somethign went wrong");
  if (isLoading) console.log("Loading...");

  return (
    <section className="card-display">
      {restaurants?.map((rest: Restaurant) => (
        <RestaurantCard key={rest.name} restaurant={rest} />
      ))}
    </section>
  );
}
