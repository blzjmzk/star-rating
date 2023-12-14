import "./StarRating.css";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface Props {
  maxRating?: number;
}

const StarRating = ({ maxRating = 10 }: Props) => {
  return (
    <div className="stars-rating-container">
      <div className="stars-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <button className="stars-button">
            <FaStar />
          </button>
        ))}
      </div>
      <p className="stars-text">liczba gwiazd</p>
    </div>
  );
};

export default StarRating;
