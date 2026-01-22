import express from 'express'
import dotenv from 'dotenv'
import cors from "cors";
const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/",(req , res) =>{
    res.send("Well and good");
})

export default app;