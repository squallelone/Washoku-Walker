import { useState, useEffect } from "react";
import { Restaurant } from "../../types";
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
      if (response.ok) {
        setRestaurants(data);
        setIsLoading(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  }

  if (isError) return <h3 className="sub-heading">Something went wrong</h3>;
  if (isLoading) return <h3 className="sub-heading">Loading...</h3>;

  return (
    <section className="card-display">
      {restaurants?.map((rest: Restaurant) => (
        <RestaurantCard key={rest.name} restaurant={rest} />
      ))}
    </section>
  );
}
