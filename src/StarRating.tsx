import "./StarRating.css";

const StarRating = () => {
  return (
    <div className="stars-rating-container">
      <div className="stars-container">
        {Array.from({ length: 10 }, (_, i) => (
          <span>star{i} </span>
        ))}
      </div>
      <p className="stars-text">liczba gwiazd</p>
    </div>
  );
};

export default StarRating;
