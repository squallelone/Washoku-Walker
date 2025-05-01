import express from "express";
import { getRecommendedRestaurants } from "../models/googlePlaces.model.js";

const recommendationController = express.Router();

recommendationController.post("/", async (req, res) => {
  const { lat, log } = req.body;

  try {
    const places = await getRecommendedRestaurants({ lat, log });
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
