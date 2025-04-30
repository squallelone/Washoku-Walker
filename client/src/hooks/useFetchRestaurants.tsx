import { useState, useEffect } from "react";
import { Restaurant } from "../types";

export default function useFetchRestaurants(
  url: string
): Array<Restaurant[] | boolean | null> {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }

  return [restaurants, isError, isLoading];
}
