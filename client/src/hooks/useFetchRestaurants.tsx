import { useState, useEffect, useContext } from "react";
import UserLocationContext from "../UserLocationContext";
import { Restaurant } from "../types";

export default function useFetchRestaurants(
  url: string
): Array<Restaurant[] | boolean | null> {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const userLoc = useContext(UserLocationContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ lat: userLoc.lat, log: userLoc.log }),
      });
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
