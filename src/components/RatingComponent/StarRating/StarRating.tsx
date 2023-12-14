import { useState } from "react";
import "./StarRating.css";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface Props {
  maxRating?: number;
  isFull?: boolean;
}

const StarRating = ({ maxRating = 10, isFull }: Props) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="stars-rating-container">
      <div className="stars-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <button
            key={i}
            className="stars-button"
            onClick={() => setRating(i + 1)}
          >
            {(isFull = rating >= i + 1)}
            {isFull ? <FaStar /> : <FaRegStar />}
          </button>
        ))}
      </div>
      <p className="stars-text">{rating || ""}</p>
    </div>
  );
};

export default StarRating;
