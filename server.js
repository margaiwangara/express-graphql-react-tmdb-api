const express = require("express");
const dotenv = require("dotenv");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const path = require("path");

// GraphQL Schema
const schema = require("./schema");

// init express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// static
app.use(express.static("public"));

// dotenv config
dotenv.config({ path: "./config/config.env" });

// route
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// redirect all routes
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
