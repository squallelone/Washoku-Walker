import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function fetchNearbyRestaurants({
  lat,
  lng,
  keyword = "",
  radius = 1500,
  language = "en",
  maxResults = 5,
}) {
  const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

  const response = await axios.get(url, {
    params: {
      location: `${lat},${lng}`,
      radius,
      type: "restaurant",
      keyword,
      language,
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
  });

  return response.data.results
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, maxResults)
    .map((r) => ({
      name: r.name,
      rating: r.rating,
      address: r.vicinity,
      maps_url: `https://www.google.com/maps/place/?q=place_id:${r.place_id}`,
    }));
}
