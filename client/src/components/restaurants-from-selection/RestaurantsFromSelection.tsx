import { useState, useEffect } from "react";

import { Restaurant } from "../../types";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import RestaurantCard from "../restaurant-card/RestaurantCard";

export default function RestaurantsFromSelection({
  chosenCuisine,
}: {
  chosenCuisine: string;
}) {
  const url = import.meta.env.VITE_BY_DISH;
  const [data, isError, isLoading] = useFetchRestaurants(url);

  if (isError) console.log("Somethign went wrong");
  if (isLoading) console.log("Loading...");

  return (
    <section>
      {data?.map((rest: Restaurant) => (
        <RestaurantCard key={rest.name} restaurant={rest} />
      ))}
    </section>
  );
}
