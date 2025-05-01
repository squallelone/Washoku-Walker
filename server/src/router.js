import express from "express";
// import { getRestaurantsByDish } from "./controllers/restaurantsByDishController.js";
// import { getNearbyRestaurants } from "./controllers/nearbyRestaurantsController.js";
import dishesController from "./controllers/dishes.controller.js";
import recommendationController from "./controllers/recommendedRestaurants.controller.js";

const router = express.Router();

// router.get("/nearby", getNearbyRestaurants);
// router.get("/by-dish", getRestaurantsByDish);
router.use("/recommendations", recommendationController);
router.use("/dishes", dishesController);
export default router;
