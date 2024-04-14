#### Where to Find Things

- Part 1: SQL Challenge - You can find the three SQL queries in the file `SQL_Queries.sql`
- Part 2A: API Endpoint - I built the API server with Express. The routing can be found in `server/server.js`. The business logic can be found in the middleware file `server/authorController.js`
- Part 2B: API Performance - To efficiently manage many simultaneous users, I implemented a cache (NodeCache) in `server/authorController.js`. Also, since the free postgres service I am using only allows 5 concurrent connections, I set the pool configurations to only allow 5 active connections. The pool will handle queueing additional connections so that the database doesn't throw an error.
- Part 3: Build & Deploy - The react components can be found in `src/components`

#### To Run Locally

1. In the root directory, add a file named `.env` and paste into it the line of code I provided via email. This is required to connect to the database.
2. In your terminal, navigate to the project root and execute the command `npm install`
3. Once the installation is complete, execute `npm run dev`
4. In a browser, navigate to the URL provided by the terminal. It will likely be http://localhost:5173/

#### Deployed Application

This application can be accessed at https://krikey-17d558d3f9d8.herokuapp.com/
I deployed the app using Heroku via the following steps:

1. Add a "start" script to the package.json.
2. Create a new application in my Heroku account.
3. Connect this GitHub repo in the Heroku app settings.
4. Add the DB_URL key and value to the env configurations.
5. Select the main branch and click "deploy".

#### API Optimization Results

Using autocannon on my localhost, I tested 2000 total requests to the API with 100 concurrent connections.

`autocannon -c 100 -a 2000 'http://localhost:3000/v1/authors/top/?author_name=John%20Doe'`

Before implementing the cache:

- The total time was 42 seconds
- The max latency was 3168 ms
- The average latency was 2054 ms

After implementing the cache:

- The total time was 3 seconds
- The max latency was 2878 ms
- The average latency was 130 ms
