const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080 | process.env.PORT;

// import mongodb
require("./db/connection");

// import router
const router = require("./routes/router");
app.use(router);

app.get("/", (rep, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
