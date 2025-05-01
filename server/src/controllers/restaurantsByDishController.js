import { fetchNearbyRestaurants } from "../utils/googlePlaces.js";

export async function getRestaurantsByDish(req, res) {
  const { lat, lng, dish, radius, language, maxResults } = req.query;

  if (!lat || !lng || !dish) {
    return res.status(400).json({ error: "lat, lng, and dish are required." });
  }

  try {
    const restaurants = await fetchNearbyRestaurants({
      lat,
      lng,
      keyword: dish,
      radius: radius || 1500,
      language: language || "en",
      maxResults: maxResults || 5,
    });

    res.json({ dish, restaurants });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
}
