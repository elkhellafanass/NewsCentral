import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Autoriser les requêtes cross-origin


connectDB();

// Testt
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Intégration des routes pour la gestion des news
app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
