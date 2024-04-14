const AuthorCard = ({ author }) => {
  const { name, email } = author;

  return (
    <div className="author-card">
      <img className="author-img" src="https://s3-alpha-sig.figma.com/img/d02b/d479/2392d3e1f91696b686fd091cfbf36c33?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fL1WE7UlU0JUmV3TLGJaWOtulj1CG268z~jcOTah2UKJuUZ9R02LkJnJRiwDp6Lg1u-F6Z9cgANyWeVZKJdP5meiNjvqwZgXSF5SAkKafKxPVxaiFGTYCfFdAVtjveyN5W4-IYkccoUxACecapnqi9nBHIN5ZL9t04LF8wkD4pJrYz~Kb2zOWUqW0zDNSa1hmENV-1tX9ZtHCa1l4pofvk8Y36UbDvfwrHQv9soQQQ03loZSw6DV0Nn7xKkEkW2i5wjex~PPaFcHojNeBq9INz6po~szqYUC145r9mmtlZ33eVQLlOP9kOgdcHbCZCyIsvpNac8uYSia6BjkYrFHXg__" />
      <div className="author-info">
        <p className="author-name">{name}</p>
        <p className="author-email">{email}</p>
      </div>
      <img className="remove-btn" src="src/assets/remove.png" />
    </div>
  );
};

export default AuthorCard;
