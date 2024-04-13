import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Get environmental variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// Initialize express app
const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
