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