import StarRating from "./components/StarRating";

const App = () => {
  return (
    <>
      <StarRating />
      <StarRating maxRating={5} color="red" size={48} />
      <StarRating maxRating={12} size={12} />
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
      />
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
        className="custom"
      />
      <StarRating defaultRating={5} />
    </>
  );
};

export default App;
