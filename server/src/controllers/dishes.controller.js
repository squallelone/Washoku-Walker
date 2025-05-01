import express from "express";
import dishesModel from "../models/dishes.model.js";

const dishesController = express.Router();

dishesController.get("/", async (_req, res) => {
  try {
    const dishes = await dishesModel.getAll();
    res.json(dishes);
  } catch (error) {
    res.status(500);
    res.json({
      message: "Something went wrong when getting all dishes.",
      error: error,
    });
  }
});

export default dishesController;
