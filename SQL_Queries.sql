-- WRITTEN FOR POSTGRES

-- Create tables
CREATE TABLE authors (
  id serial PRIMARY KEY,
  name text,
  email text,
  date_of_birth timestamp
);
CREATE TABLE books (
  id serial PRIMARY KEY,
  author_id integer REFERENCES authors (id),
  isbn text,
);
CREATE TABLE sale_items (
  id serial PRIMARY KEY,
  book_id integer REFERENCES books (id),
  customer_name text,
  item_price money,
  quantity integer
);


-- 1. Who are the first 10 authors ordered by date_of_birth?
SELECT name, date_of_birth
FROM authors
ORDER BY date_of_birth
LIMIT 10;

-- 2. What is the sales total for the author named “Lorelai Gilmore”?
SELECT SUM(sale_items.item_price * sale_items.quantity) AS "Sales Total"
FROM sale_items
JOIN books
ON books.id = sale_items.book_id
JOIN authors
ON authors.id = books.author_id
WHERE authors.name = 'Lorelai Gilmore';

-- 3. What are the top 10 performing authors, ranked by sales revenue?
SELECT authors.name, SUM(sale_items.item_price * sale_items.quantity) AS "Sales Total"
FROM sale_items
JOIN books
ON books.id = sale_items.book_id
JOIN authors
ON authors.id = books.author_id
GROUP BY authors.name
ORDER BY "Sales Total" DESC
LIMIT 10