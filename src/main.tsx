import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/RatingComponent/StarRating";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarRating maxRating={10} />
  </React.StrictMode>
);
