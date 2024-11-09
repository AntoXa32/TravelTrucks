import RatingStars from "../RatingStars/RatingStars.jsx";

function CamperDetails({ camper }) {
  return (
    <div className="camper-details">
      <h2>{camper.name}</h2>
      <p>Price: {camper.price} UAH per day</p>
      <RatingStars rating={camper.rating} />
      <p>{camper.description}</p>
    </div>
  );
}

export default CamperDetails;
