const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
var cors = require("cors");

const { errorHandler } = require("./middlewares/index");
const heroes = require("./routes/heroes");

// Load environment variables
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/heroes", heroes);

app.use(errorHandler);

// listen to requests
const server = app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode in ${PORT}`.yellow)
);

// handling rejected promises

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`.red);
});
