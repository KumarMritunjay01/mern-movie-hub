import express from 'express'
import dotenv from 'dotenv'
import cors from "cors";
import movieRoutes from './routes/movie.routes.js'
import authRoutes from "./routes/auth.routes.js";


const app = express();
dotenv.config()

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Middleware
app.use("/api/auth", authRoutes);
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

export default app;