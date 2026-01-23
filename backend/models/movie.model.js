import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    poster: {
      type: String, // image URL
      default: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg", 
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    releaseDate: {
      type: Date,
    },
    duration: {
      type: Number, // in minutes
    },
    genre: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);