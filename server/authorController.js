import pkg from "pg";
import { top_10_query, get_author } from "./queries.js";
import dotenv from "dotenv";

// Connect to PostgreSQL database
const { Pool } = pkg;
dotenv.config();
const DB_URL = process.env.DB_URL;
const pool = new Pool({
  connectionString: DB_URL
});

const authorController = {};

// Ensure that the author in the request query exists in the database.
authorController.validateAuthor = async (req, res, next) => {
  const { author_name } = req.query;
  console.log({ author_name });

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

// Get the top 10 authors from the database
authorController.getTopAuthors = async (req, res, next) => {
  const queryResult = await pool.query(top_10_query);

  const topAuthors = queryResult.rows;
  res.locals.topAuthors = topAuthors;

  return next();
};

export default authorController;
