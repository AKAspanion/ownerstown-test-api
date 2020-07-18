const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const heroes = require("./routes/heroes");

// Load environment variables
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

const app = express();

app.use(express.json());

app.use("/api/v1/heroes", heroes);

// listen to requests
const server = app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode in ${PORT}`.yellow)
);

// handling rejected promises

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
