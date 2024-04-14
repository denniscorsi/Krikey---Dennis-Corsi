import pkg from "pg";
const { Pool } = pkg;
import { top_10_query, get_author } from "./queries.js";
import dotenv from "dotenv";
dotenv.config();

// Connect to PostgreSQL database
const DB_URL = process.env.DB_URL;
const pool = new Pool({
  connectionString: DB_URL
});

const authorController = {};

authorController.validateAuthor = async (req, res, next) => {
  const { author_name } = req.query;
  console.log({ author_name });

  // Verify validity of author name if one is included in the query
  if (author_name) {
    const queryResult = await pool.query(get_author, [author_name]);
    const author = queryResult.rows[0];
    if (!author) {
      return next({
        message: `${author_name} does not exist in database`,
        status: 404
      });
    }
  }
  return next();
};

authorController.getTopAuthors = async (req, res, next) => {
  const queryResult = await pool.query(top_10_query);

  const topAuthors = queryResult.rows; // This in an array of author objects
  res.locals.topAuthors = topAuthors;

  next();
};

export default authorController;
