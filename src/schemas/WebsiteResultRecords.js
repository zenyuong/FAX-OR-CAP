const mongoose = require("mongoose");

const websiteResultRecordsSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Title Unavailable",
  },
  link: {
    type: String,
    required: true,
  },
  main_text: {
    type: String,
    default: "Main Text Unavailable",
  },
  label: {
    type: String,
    required: true,
  },
  positiveWords: [String],
  negativeWords: [String],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  user: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model(
  "WebsiteResultRecordsSchema",
  websiteResultRecordsSchema
);
