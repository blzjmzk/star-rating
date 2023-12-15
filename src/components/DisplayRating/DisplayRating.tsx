import { useState } from "react";
import StarRating from "../StarRating";
import "./DisplayRating.css";

const DisplayRating = () => {
  const [movieRating, setMovieRanking] = useState(0);

  return (
    <>
      <div className="example">
        <p>Example of using rating value in an external component:</p>
        <StarRating onSetRating={setMovieRanking} />
        <p>The movie was rated {movieRating} stars</p>
      </div>
    </>
  );
};

export default DisplayRating;
