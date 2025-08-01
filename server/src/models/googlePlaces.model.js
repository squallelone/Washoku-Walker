import dotenv from "dotenv";
dotenv.config();
import fieldMask from "../lib/fieldMask.js";

// This is for users who aren't sure what they want and need restaurant
// recommendations near them.
async function getRecommendedRestaurants(locationData) {
  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    body: JSON.stringify({
      includedPrimaryTypes: ["restaurant"],
      maxResultCount: 6,
      locationRestriction: {
        circle: {
          center: {
            latitude: locationData.lat,
            longitude: locationData.log,
          },
          radius: 1500,
        },
      },
    }),
  });

  const data = await response.json();
  return processPlaces(data);
}

// This is for user who want to eat a specific kind of food in a specific area.
async function getRestaurantsByDishAndArea(dish, area) {
  const url = "https://places.googleapis.com/v1/places:searchText";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    body: JSON.stringify({
      textQuery: `${dish} restaurants in ${area}`,
    }),
  });
  const data = await response.json();
  if (data.places) {
    return processPlaces(data);
  }
  console.error(data);
}

// Helper function
function processPlaces(rawPlaces) {
  const places = (rawPlaces.places || []).map((place) => {
    return {
      name: (place.displayName || {}).text ?? "noName",
      id: place.id || "",
      rating: place.rating || null,
      address: place.formattedAddress || "",
      url: place.websiteUri || "",
      openNow: (place.regularOpeningHours || {}).openNow || null,
    };
  });

  return places.sort((a, b) => b.rating - a.rating);
}

export { getRecommendedRestaurants, getRestaurantsByDishAndArea };
