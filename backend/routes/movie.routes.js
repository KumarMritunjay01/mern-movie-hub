import express from "express";
import {
  addMovie,
  getAllMovies,
  searchMovies,
  sortMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";

const router = express.Router();

// ✅ PUBLIC ROUTES
router.get("/", getAllMovies);
router.get("/search", searchMovies);
router.get("/sorted", sortMovies);

// ✅ ADMIN ROUTES
router.post("/", protect, adminOnly, addMovie);
router.put("/:id", protect, adminOnly, updateMovie);
router.delete("/:id", protect, adminOnly, deleteMovie);

export default router;
