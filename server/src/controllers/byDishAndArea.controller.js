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
    res.json(places.slice(0, 5));
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({
      message: "Something went wrong when trying get dish by area.",
      error: error,
    });
  }
});

export default byDishAndAreaController;
