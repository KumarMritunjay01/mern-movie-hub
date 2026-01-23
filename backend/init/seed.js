import mongoose from "mongoose";
import dotenv from "dotenv";
import csv from "csvtojson";
import Movie from "../models/movie.model.js";

dotenv.config({ path: "../.env" });

// convert "3h 11m" → minutes
const convertDuration = (time) => {
  if (!time) return 0;

  const h = time.match(/(\d+)h/);
  const m = time.match(/(\d+)m/);

  return (h ? parseInt(h[1]) * 60 : 0) +
         (m ? parseInt(m[1]) : 0);
};

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    const rawMovies = await csv().fromFile(
      new URL("./movies.csv", import.meta.url)
    );

    console.log("Total rows in CSV:", rawMovies.length);
    console.log("First row:", rawMovies[0]);

    const movies = rawMovies
    .filter(m => m.title && m.title.trim() !== "")
    .map(m => ({
        title: m.title.trim(),
        description: m.description?.trim() || "No description available",
        rating: Number(m.rating),
        releaseDate: `${m.releaseDate}-01-01`,
        duration: convertDuration(m.duration),
        genre: m.genre || "Drama",
        // ❌ poster removed
    }));


    await Movie.deleteMany();
    await Movie.insertMany(movies);

    console.log(`🎉 ${movies.length} movies inserted successfully`);
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

seedMovies();