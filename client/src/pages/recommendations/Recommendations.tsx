import { useState, useEffect } from "react";

import { Restaurant } from "../../types";

export default function Recommendations() {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = import.meta.env.VITE_RECOM;

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
      console.log(error);
      setIsError(true);
    }
  }

  if (isError) return <h1>Something went wrong.</h1>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h1 className="page-title">Recommended Restaurants Near You</h1>
    </section>
  );
}
