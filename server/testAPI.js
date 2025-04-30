// import fetch from "node-fetch";

// // APIKey
// const API_KEY = "AIzaSyCX8aBLq56e6DJSRg4OTV63UVwoExqqxZ4";

// // Localisation (ex: Tokyo Tower)
// const latitude = 35.6586;
// const longitude = 139.7454;

// // URL request
// const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&keyword=ramen&key=${API_KEY}`;

// // API call
// async function fetchPlaces() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("Résultats trouvés :", data.results);
//   } catch (error) {
//     console.error("Erreur lors de l'appel à l'API :", error);
//   }
// }

// // functin execution
// fetchPlaces();

// import fetch from "node-fetch";

// const API_KEY = "AIzaSyCX8aBLq56e6DJSRg4OTV63UVwoExqqxZ4"; // remplace par ta clé
// const LATITUDE = 35.6586; // Tokyo Tower
// const LONGITUDE = 139.7454;
// const RADIUS = 500; // en mètres

// // 1. Nearby Search
// const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LATITUDE},${LONGITUDE}&radius=${RADIUS}&type=restaurant&keyword=ramen&key=${API_KEY}`;

// async function getRestaurants() {
//   try {
//     const res = await fetch(nearbyUrl);
//     const data = await res.json();
//     const restaurants = data.results.slice(0, 5); // ⛔ limite à 5

//     for (const place of restaurants) {
//       const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,formatted_address,price_level,user_ratings_total,reviews&key=${API_KEY}`;

//       const detailsRes = await fetch(detailsUrl);
//       const detailsData = await detailsRes.json();
//       const info = detailsData.result;

//       console.log(`📍 ${info.name}`);
//       console.log(`   Adresse : ${info.formatted_address}`);
//       console.log(`   Note : ${info.rating ?? "Non noté"}`);
//       console.log(`   Prix : ${info.price_level ?? "Non précisé"}`);
//       console.log(`   Avis : ${info.user_ratings_total ?? 0}`);
//       console.log("------------------------------------");
//     }
//   } catch (error) {
//     console.error("❌ Erreur API :", error);
//   }
// }

// getRestaurants();

// import fetch from "node-fetch";

// const API_KEY = "AIzaSyCX8aBLq56e6DJSRg4OTV63UVwoExqqxZ4"; // Replace with your real API key

// // Code Chrysalis location (Roppongi / Azabu-Juban)
// const LATITUDE = 35.6604;
// const LONGITUDE = 139.7295;
// const RADIUS = 1000; // 1 km search radius

// // Build the Nearby Search URL
// const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LATITUDE},${LONGITUDE}&radius=${RADIUS}&type=restaurant&key=${API_KEY}`;

// async function getRestaurants() {
//   try {
//     const res = await fetch(nearbyUrl);
//     const data = await res.json();

//     const goodRestaurants = data.results
//       .filter((place) => place.rating && place.rating >= 4) // rating >= 4
//       .sort((a, b) => a.name.localeCompare(b.name)) // sort by name
//       .slice(0, 5); // limit to 5

//     for (const place of goodRestaurants) {
//       const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=place_id,geometry/location,name,photos,current_opening_hours,opening_hours,rating,price_level,international_phone_number,national_phone_number&key=${API_KEY}`;

//       const detailsRes = await fetch(detailsUrl);
//       const detailsData = await detailsRes.json();
//       const info = detailsData.result;

//       if (!info) {
//         console.log(
//           `⚠️ No detailed info available for place_id: ${place.place_id}`
//         );
//         continue;
//       }

//       // 📋 Here is the full field-by-field display:
//       console.log(`🆔 places.id: ${info.place_id ?? "Not available"}`);
//       console.log(
//         `📍 places.location: lat=${info.geometry?.location?.lat ?? "?"}, lng=${
//           info.geometry?.location?.lng ?? "?"
//         }`
//       );
//       console.log(`🏠 places.name: ${info.name ?? "Not available"}`);

//       if (info.photos) {
//         console.log(
//           `🖼 places.photos: ${info.photos.length} photo(s) available`
//         );
//         info.photos.slice(0, 3).forEach((photo, index) => {
//           console.log(
//             `   Photo ${index + 1} reference: ${photo.photo_reference}`
//           );
//         });
//       } else {
//         console.log(`🖼 places.photos: Not available`);
//       }

//       console.log(
//         `🕑 places.currentOpeningHours: ${
//           JSON.stringify(info.current_opening_hours?.weekday_text) ??
//           "Not available"
//         }`
//       );
//       console.log(
//         `🕑 places.regularOpeningHours: ${
//           JSON.stringify(info.opening_hours?.weekday_text) ?? "Not available"
//         }`
//       );
//       console.log(`⭐ places.rating: ${info.rating ?? "Not available"}`);
//       console.log(
//         `💵 places.priceLevel: ${info.price_level ?? "Not available"}`
//       );
//       console.log(
//         `💵 places.priceRange: Not available (⚠️ Note: Google Places API does NOT provide priceRange field)`
//       );
//       console.log(
//         `📞 places.internationalPhoneNumber: ${
//           info.international_phone_number ?? "Not available"
//         }`
//       );
//       console.log(
//         `📞 places.nationalPhoneNumber: ${
//           info.national_phone_number ?? "Not available"
//         }`
//       );
//       console.log("------------------------------------");
//     }
//   } catch (error) {
//     console.error("❌ API Error:", error);
//   }
// }

// getRestaurants();

import fetch from "node-fetch";

const API_KEY = "AIzaSyCX8aBLq56e6DJSRg4OTV63UVwoExqqxZ4"; // Replace with your real API key

// Code Chrysalis approximate location (Roppongi / Azabu-Juban)
const LATITUDE = 35.6604;
const LONGITUDE = 139.7295;
const RADIUS = 1500; // 1.5 km search radius

const keyword = "soba"; // Searching for 'name of dish'

async function getRestaurants() {
  try {
    // Build the Nearby Search URL
    const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LATITUDE},${LONGITUDE}&radius=${RADIUS}&type=restaurant&keyword=${encodeURIComponent(
      keyword
    )}&key=${API_KEY}`;

    const res = await fetch(nearbyUrl);
    const data = await res.json();

    console.log(`✅ Raw total found: ${data.results.length} restaurants`);
    if (!data.results || data.results.length === 0) {
      console.log("❌ No restaurants found.");
      return;
    }

    // Filter by rating >= 3.5
    const filteredRestaurants = data.results
      .filter((place) => place.rating && place.rating >= 3.5)
      .sort((a, b) => b.rating - a.rating) // Optional: sort by rating descending
      .slice(0, 5); // Optional: limit results for display
    console.log(
      `✅ After filtering (rating >= 3.5): ${filteredRestaurants.length} restaurants`
    );

    for (const place of filteredRestaurants) {
      console.log(`📍 Name: ${place.name ?? "Not available"}`);
      console.log(`🆔 Place ID: ${place.place_id ?? "Not available"}`);
      console.log(
        `📍 Location: lat=${place.geometry?.location?.lat ?? "?"}, lng=${
          place.geometry?.location?.lng ?? "?"
        }`
      );
      console.log(
        `🖼 Photos: ${
          place.photos ? place.photos.length + " available" : "Not available"
        }`
      );
      if (place.photos) {
        place.photos.slice(0, 2).forEach((photo, index) => {
          console.log(`   Photo ${index + 1} ref: ${photo.photo_reference}`);
        });
      }
      console.log(
        `🕑 Open Now: ${
          place.opening_hours?.open_now !== undefined
            ? place.opening_hours.open_now
              ? "Yes"
              : "No"
            : "Unknown"
        }`
      );
      console.log(`⭐ Rating: ${place.rating ?? "Not available"}`);
      console.log(`💵 Price Level: ${place.price_level ?? "Not available"}`);
      console.log(
        `👥 Total Reviews: ${place.user_ratings_total ?? "Not available"}`
      );
      console.log(`📍 Address: ${place.vicinity ?? "Not available"}`);
      console.log("------------------------------------");
    }
  } catch (error) {
    console.error("❌ API Error:", error);
  }
}

getRestaurants();
