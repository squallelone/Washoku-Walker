import dotenv from "dotenv";
dotenv.config();

// // Google Places API key init
// ((g) => {
//   var h,
//     a,
//     k,
//     p = "The Google Maps JavaScript API",
//     c = "google",
//     l = "importLibrary",
//     q = "__ib__",
//     m = document,
//     b = window;
//   b = b[c] || (b[c] = {});
//   var d = b.maps || (b.maps = {}),
//     r = new Set(),
//     e = new URLSearchParams(),
//     u = () =>
//       h ||
//       (h = new Promise(async (f, n) => {
//         await (a = m.createElement("script"));
//         e.set("libraries", [...r] + "");
//         for (k in g)
//           e.set(
//             k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
//             g[k]
//           );
//         e.set("callback", c + ".maps." + q);
//         a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
//         d[q] = f;
//         a.onerror = () => (h = n(Error(p + " could not load.")));
//         a.nonce = m.querySelector("script[nonce]")?.nonce || "";
//         m.head.append(a);
//       }));
//   d[l]
//     ? console.warn(p + " only loads once. Ignoring:", g)
//     : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
// })({
//   key: process.env.GOOGLE_MAPS_API_KEY,
//   v: "weekly",
//   // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
//   // Add other bootstrap parameters as needed, using camel case.
// });

// const { Place } = await google.maps.importLibrary("places");

// import { PlacesClient } from "@googlemaps/places";
// // https://www.npmjs.com/package/@googlemaps/places#using-the-client-library
// const placesClient = new PlacesClient();

// This is for users who aren't sure what they want and need restaurant
// recommendations near them.
async function getRecommendedRestaurants(locationData) {
  console.log(process.env.GOOGLE_MAPS_API_KEY);

  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": "places.displayName",
    },
    body: JSON.stringify({
      includedTypes: ["restaurant"],
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
  //   console.log("google response:", response);
  const data = await response.json();

  return data;

  //   const center = new google.maps.LatLng(locationData.lat, locationData.log);
  //   const request = {
  //     // required parameters
  //     fields: ["displayName", "location", "businessStatus"],
  //     locationRestriction: {
  //       center: center,
  //       radius: 1500, // meters
  //     },
  //     // optional parameters
  //     includedPrimaryTypes: ["restaurant"],
  //     maxResultCount: 5,
  //     rankPreference: SearchNearbyRankPreference.POPULARITY,
  //     language: "en-US",
  //     region: "jp",
  //   };
  //   //@ts-ignore
  //   const { places } = await Place.searchNearby(request);
  //   return places;
}

export { getRecommendedRestaurants };
