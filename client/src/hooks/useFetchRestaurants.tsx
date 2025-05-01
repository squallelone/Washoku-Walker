import { useState, useEffect } from "react";
import { Restaurant } from "../types";

export default function useFetchRestaurants(
  url: string
): Array<Restaurant[] | boolean | null> {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [lat, setLat] = useState(null);
  const [log, setLog] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, [lat, log]);

  async function getRestaurants() {
    try {
      await getGeolocation();
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ lat, log }),
      });
      const data = await response.json();
      console.log("response data:", data);

      setRestaurants(data.places);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }

  async function getGeolocation() {
    await navigator.geolocation.getCurrentPosition(success, error);
  }
  function success(position) {
    setLat(position.coords.latitude);
    setLog(position.coords.longitude);
  }

  function error() {
    console.error("Error when trying to get location.");
  }
  return [restaurants, isError, isLoading];
}
