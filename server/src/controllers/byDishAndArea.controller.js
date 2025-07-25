import express from "express";
import { getRestaurantsByDishAndArea } from "../models/googlePlaces.model.js";

const byDishAndAreaController = express.Router();

byDishAndAreaController.get("/", async (req, res) => {
  const { dish, area } = req.query;
  if (!dish || !area) {
    res.status(400);
    return res.json({ error: "Please send valid dish and area query params." });
  }
  try {
    const places = await getRestaurantsByDishAndArea(dish, area);
    if (Array.isArray(places)) {
      res.json(places);
    }
    console.error("attempted to fetch from google api:", places);
    res.status(500);
    res.end();
  } catch (error) {
    console.error("catch error in dishes and area controller:", error);
    res.status(500);
    res.json({
      message: "Something went wrong when trying get dish by area.",
      error: error,
    });
  }
});

export default byDishAndAreaController;
