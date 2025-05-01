import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js";
// import nearbyRestaurantsRoutes from "./routes/nearByRestaurants.js";
// import restaurantsByDishRoutes from "./routes/restaurantsByDish.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "testing" });
});
app.use("/api/restaurant", router);
// app.use("/api/restaurants/nearby", nearbyRestaurantsRoutes);
// app.use("/api/restaurants/by-dish", restaurantsByDishRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
