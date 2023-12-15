import DisplayRating from "./components/DisplayRating";
import StarRating from "./components/StarRating";

const App = () => {
  return (
    <>
      <StarRating />
      <StarRating maxRating={5} color="red" size={48} />
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
      />
      <StarRating className="custom" />
      <StarRating defaultRating={5} />
      <DisplayRating />
    </>
  );
};

export default App;
