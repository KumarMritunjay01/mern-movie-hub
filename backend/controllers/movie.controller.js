import Movie from "../models/movie.model.js";

/* ============================
   ✅ ADD MOVIE (ADMIN)
============================ */
export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
      movie,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ============================
   ✅ GET ALL MOVIES (WITH PAGINATION)
============================ */
export const getAllMovies = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const movies = await Movie.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Movie.countDocuments();

    res.status(200).json({
      movies,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ============================
   ✅ SEARCH MOVIES
============================ */
export const searchMovies = async (req, res) => {
  try {
    const q = req.query.q || "";

    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ============================
   ✅ SORT MOVIES
============================ */
export const sortMovies = async (req, res) => {
  try {
    const { sortBy, order } = req.query;

    const sortField = sortBy || "rating";
    const sortOrder = order === "desc" ? -1 : 1;

    const movies = await Movie.find().sort({
      [sortField]: sortOrder,
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ============================
   ✅ UPDATE MOVIE
============================ */
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ============================
   ✅ DELETE MOVIE
============================ */
export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};