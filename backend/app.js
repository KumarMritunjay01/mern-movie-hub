import express from 'express'
import dotenv from 'dotenv'
import cors from "cors";
import movieRoutes from './routes/movie.routes.js'


const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/movies", movieRoutes);

export default app;