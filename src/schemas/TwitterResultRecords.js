const mongoose = require("mongoose");

const twitterResultRecordsSchema = new mongoose.Schema({
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
  "TwitterResultRecordsSchema",
  twitterResultRecordsSchema
);
