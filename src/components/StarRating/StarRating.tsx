import { useState } from "react";
import "./StarRating.css";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface Props {
  maxRating: number;
  color: string;
  size: number;
}

const StarRating = ({
  maxRating = 10,
  color = "#FFBB00",
  size = 24,
}: Props) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div className="stars-rating-container">
      <div className="stars-container">
        {Array.from({ length: maxRating }, (_, i) => {
          const isStarFilled: boolean = tempRating
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
              {isStarFilled ? (
                <FaStar color={color} size={size} />
              ) : (
                <FaRegStar color={color} size={size} />
              )}
            </button>
          );
        })}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;
