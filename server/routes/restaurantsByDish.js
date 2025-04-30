import express from "express";
import { getRestaurantsByDish } from "../controllers/restaurantsByDishController.js";

const router = express.Router();

router.get("/", getRestaurantsByDish);

export default router;
