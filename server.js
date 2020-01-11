const express = require("express");
const dotenv = require("dotenv");

// init express
const app = express();

// Middleware
app.use(express.json());

// dotenv config
dotenv.config({ path: "./config/config.env" });

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
