import express from "express";
import { getRestaurantsByDish } from "./controllers/restaurantsByDishController.js";
import { getNearbyRestaurants } from "./controllers/nearbyRestaurantsController.js";

const router = express.Router();

router.get("/nearby", getNearbyRestaurants);
router.get("/by-dish", getRestaurantsByDish);

export default router;
