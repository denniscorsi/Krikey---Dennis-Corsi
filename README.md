#### API Optimization Results

Using autocannon, I tested 2000 total requests to the API with 100 concurrent connections.

`autocannon -c 100 -a 2000 'http://localhost:3000/authors/top/?author_name=John%20Doe'`

Before implementing the cache:

- The total time was 42 seconds
- The max latency was 3168 ms
- The average latency was 2054 ms

After implementing the cache:

- The total time was 3 seconds
- The max latency was 2878 ms
- The average latency was 130 ms
