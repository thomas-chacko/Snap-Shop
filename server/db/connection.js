const mongoose = require("mongoose");
const connectionString = process.env.MongoUrl;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.log("mongodb connection error", err);
  });
