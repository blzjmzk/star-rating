import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarRating />
    <StarRating maxRating={5} color="red" size={48} />
    <StarRating maxRating={12} size={12} />
  </React.StrictMode>
);
