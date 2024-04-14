// Get the top 10 performing authors, ranked by sales revenue
export const top_10_query = `
SELECT authors.name, authors.email, SUM(sale_items.item_price * sale_items.quantity) AS "Sales Total"
FROM sale_items
JOIN books
ON books.id = sale_items.book_id
JOIN authors
ON authors.id = books.author_id
GROUP BY authors.name, authors.email
ORDER BY "Sales Total" DESC
LIMIT 10`;

// Get information for a given author
export const get_author = `
SELECT * 
FROM authors
WHERE name = $1`;
