import express from 'express'
import dotenv from 'dotenv'
import cors from "cors";
import movieRoutes from './routes/movie.routes.js'
import authRoutes from "./routes/auth.routes.js";

dotenv.config()

const app = express();

app.use(
  cors({
    origin:"https://mern-movie-hub.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

export default app;