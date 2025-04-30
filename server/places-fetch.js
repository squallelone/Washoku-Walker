// const placeHits = document.querySelector(".place-hits");

// Init API key
((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
  key: "", // Add API key here
  v: "weekly",
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
});

async function nearbySearch() {
  //@ts-ignore
  const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary(
    "places"
  );
  //   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  // Restrict within the map viewport.
  let center = new google.maps.LatLng(35.662682221961596, 139.50137357633594); // my place
  const request = {
    // required parameters
    fields: ["displayName", "location", "businessStatus", "types", "rating"],
    locationRestriction: {
      center: center,
      radius: 500,
    },
    // optional parameters
    includedPrimaryTypes: ["restaurant"],
    maxResultCount: 10,
    rankPreference: SearchNearbyRankPreference.POPULARITY,
    language: "en-US",
    region: "us",
  };
  //@ts-ignore
  const { places } = await Place.searchNearby(request);

  if (places.length) {
    console.log(places[0]);

    // Loop through and get all the results.
    places.forEach((place) => {
      makeCard(place);
    });
  } else {
    console.log("No results");
  }
}

// initMap();
nearbySearch();

// Helper functions
function makeCard(place) {
  const title = makeTitle(place);
  const isOpen = makeIsOpen(place);
  const rating = getRating(place);
  const typeList = makeListOfTypes(place);

  placeHits.appendChild(title);
  placeHits.appendChild(isOpen);
  placeHits.appendChild(rating);
  placeHits.appendChild(typeList);
}

function makeTitle(place) {
  const h3 = document.createElement("h3");
  h3.textContent = place.displayName;
  return h3;
}

function makeIsOpen(place) {
  const p = document.createElement("p");
  if (place.businessStatus === "OPERATIONAL") {
    p.textContent = place.displayName + " is open";
  } else {
    p.textContent = place.displayName + " is closed";
  }
  return p;
}

function getRating(place) {
  const p = document.createElement("p");
  p.textContent = "Rating: " + place.rating;
  return p;
}

function makeListOfTypes(place) {
  const ul = document.createElement("ul");
  place.types.forEach((type) => {
    const li = document.createElement("li");
    li.textContent = type;
    ul.appendChild(li);
  });
  return ul;
}
