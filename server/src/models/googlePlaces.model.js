import dotenv from "dotenv";
dotenv.config();

// This is for users who aren't sure what they want and need restaurant
// recommendations near them.
async function getRecommendedRestaurants(locationData) {
  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask":
        "places.displayName,places.rating,places.formattedAddress,places.websiteUri,places.regularOpeningHours.openNow",
    },
    body: JSON.stringify({
      includedPrimaryTypes: ["restaurant"],
      maxResultCount: 5,
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
  return data;
}

export { getRecommendedRestaurants };
