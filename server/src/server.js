import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ ok: true, message: "testing" });
});
app.use("/api/restaurant", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
