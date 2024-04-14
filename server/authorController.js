import pkg from "pg";
const { Pool } = pkg;
import { top_10_query } from "./queries.js";
import dotenv from "dotenv";
dotenv.config();

// Connect to PostgreSQL database
const DB_URL = process.env.DB_URL;
const pool = new Pool({
  connectionString: DB_URL
});

const authorController = {};

authorController.validateAuthor = (req, res, next) => {
  const { author_name } = req.query;
  console.log({ author_name });
  next();
};

authorController.getTopAuthors = async (req, res, next) => {
  const queryResult = await pool.query(top_10_query);

  const topAuthors = queryResult.rows; // This in an array of author objects
  res.locals.topAuthors = topAuthors;

  next();
};

export default authorController;
