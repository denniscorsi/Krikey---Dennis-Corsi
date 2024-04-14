import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import authorController from "./authorController.js";

// Get environmental variables
dotenv.config();
const PORT = process.env.PORT || 3000;

// Initialize express app
const app = express();
app.use(bodyParser.json());

app.get(
  "/v1/authors/top",
  authorController.validateAuthor,
  authorController.getTopAuthors,
  (req, res) => {
    res.status(200).json(res.locals.topAuthors);
  }
);

// Catch-all endpoint to send a 404 status
app.use("*", (req, res) => {
  res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: "Express error handler caught an unknown middleware error",
    status: 500,
    message: "Internal Server Error"
  };
  const error = Object.assign({}, defaultError, err);
  res.status(error.status).json(error.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
