const AuthorCard = ({ author }) => {
  const { name, email } = author;

  return (
    <div className="author-card">
      <img />
      <div className="author-info">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <div className="remove-button">X</div>
    </div>
  );
};

export default AuthorCard;
