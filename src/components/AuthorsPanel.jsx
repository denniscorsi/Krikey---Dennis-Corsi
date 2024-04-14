import { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";

const AuthorsPanel = () => {
  const [authorCards, setAuthorCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTopAuthors = () => {
    fetch("/v1/authors/top")
      .then((res) => res.json())
      .then((authors) => {
        const cards = authors.map((author) => <AuthorCard key={author.email} author={author} />);
        setAuthorCards(cards);
        setIsLoading(false);
      });
  };

  useEffect(fetchTopAuthors, []);

  return (
    <>
      <div className="authors-panel">{isLoading ? <p>Loading Authors...</p> : authorCards}</div>
    </>
  );
};

export default AuthorsPanel;
