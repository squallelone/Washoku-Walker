import express from "express";
import { getRecommendedRestaurants } from "../models/googlePlaces.model.js";

const recommendationController = express.Router();

recommendationController.post("/", async (req, res) => {
  const { lat, log } = req.body;

  try {
    const rawPlaces = await getRecommendedRestaurants({ lat, log });
    const places = rawPlaces.places.map((place) => {
      return {
        name: place.displayName.text,
        rating: place.rating,
        address: place.formattedAddress,
        url: place.websiteUri,
        openNow: place.regularOpeningHours.openNow,
      };
    });
    // console.log(places);

    res.json(places);
  } catch (error) {
    res.status(500);
    res.json({
      message:
        "Something went wrong when trying to fetch recommended restaurants.",
      error: error,
    });
  }
});

export default recommendationController;
