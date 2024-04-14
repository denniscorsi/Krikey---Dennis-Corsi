import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authorController from "./authorController.js";
dotenv.config();

// Get environmental variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// Initialize express app
const app = express();
app.use(bodyParser.json());

app.get(
  "/authors/top",
  authorController.validateAuthor,
  authorController.getTopAuthors,
  (req, res) => {
    res.status(200).json(res.locals.topAuthors);
  }
);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
