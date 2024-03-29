const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Title is required"],
    },
    excerpt: {
      type: String,
      trim: true,
      required: [true, "Excerpt is required"],
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    ISBN: {
      type: String,
      trim: true,
      required: [true, "ISBN code is required"],
      unique: true,
    },
    category: {
      type: String,
      trim: true,
      required: [true, "Category is required"],
    },
    subcategory: {
      type: [String],
      required: [true, "Subcategory is required"],
    },
    reviews: {
      type: Number,
      default: 0,
    },
    deletedAt: Date,
    isDeleted: {
      type: Boolean,
      default: false,
    },
    releasedAt: {
      type: Date,
      required: [true, "Release date is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
