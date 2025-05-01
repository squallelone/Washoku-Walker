import { fetchNearbyRestaurants } from "../utils/googlePlaces.js";

export async function getNearbyRestaurants(req, res) {
  const { lat, lng, radius, language, maxResults } = req.query;

  if (!lat || !lng) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required." });
  }

  try {
    const restaurants = await fetchNearbyRestaurants({
      lat,
      lng,
      radius: radius || 1500,
      language: language || "en",
      maxResults: maxResults || 5,
    });

    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
}
