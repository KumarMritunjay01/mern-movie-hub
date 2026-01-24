import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movie.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// ✅ THIS IS THE IMPORTANT PART
const allowedOrigins = process.env.CLIENT_URLS.split(",");

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// ✅ ROUTES (DO NOT CHANGE)
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

export default app;