import { useState } from "react";
import "./StarRating.css";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface Props {
  maxRating?: number;
}

const StarRating = ({ maxRating = 10 }: Props) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="stars-rating-container">
      <div className="stars-container">
        {Array.from({ length: maxRating }, (_, i) => {
          const isStarFilled = tempRating
            ? tempRating >= i + 1
            : rating >= i + 1;

          return (
            <button
              key={i}
              className="stars-button"
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
            >
              {isStarFilled ? <FaStar /> : <FaRegStar />}
            </button>
          );
        })}
      </div>
      <p className="stars-text">{rating || ""}</p>
    </div>
  );
};

export default StarRating;
