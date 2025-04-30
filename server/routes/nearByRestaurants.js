import express from "express";
import { getNearbyRestaurants } from "../controllers/nearbyRestaurantsController.js";

const router = express.Router();

router.get("/", getNearbyRestaurants);

export default router;
