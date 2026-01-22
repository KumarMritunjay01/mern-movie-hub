import express from "express";
import {
  addMovie,
  getAllMovies,
  searchMovies,
  sortMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.post("/", addMovie);
router.get("/", getAllMovies);
router.get("/search", searchMovies);
router.get("/sorted", sortMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;